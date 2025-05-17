from django.shortcuts import render,redirect

from .forms import UserCreationForms
from django.conf import settings
import requests

from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.models import Group
from django.contrib import messages
#from django.http import HttpResponse

from django.views.generic import DetailView, UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Patient
from django.urls import reverse_lazy


from django.shortcuts import get_object_or_404
from .models import *
from .utils import calculate_progress

from django.views.generic import ListView

from django.views.decorators.http import require_GET

from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required

from django.db import IntegrityError
from .models import Question, AnswerOption, PatientResponse, Patient
from django.core.exceptions import ObjectDoesNotExist





def register(request):
    form = UserCreationForms()
    if request.method == 'POST' :
        form = UserCreationForms(request.POST)
        if form.is_valid() :
            # recaptcha_response = request.POST.get('g-recaptcha-response')
            # data = {
            #     'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
            #     'response': recaptcha_response
            # }
            # r = requests.post(
            #     'https://www.google.com/recaptcha/api/siteverify', data=data)
            # resulte = r.json()
            # if resulte['success']:
                user = form.save()
                user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password1'])
                login(request, user)
                username = form.cleaned_data.get('username')
                group = Group.objects.get(name='normalUser')
                user.groups.add(group)
                # messages.success(request, username + ' Created Successfully !')
                return redirect('index')
            # else:
            #     messages.info(
            #         request, ' invalid recaptcha please try againe !')
                
    context = {'form':form}
    return render(request,'register.html',context)



def log(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)

        if user is not None:
            # recaptcha_response = request.POST.get('g-recaptcha-response')
            # ... (كود reCAPTCHA هنا)
            
            login(request, user)  # ✓ التصحيح النهائي هنا
            return redirect('index')
        else:
            messages.error(request, 'Invalid username or password')
    
    return render(request, 'login.html')


def user_logout(request) :
    logout(request)
    return redirect('index')









from django.core.exceptions import ObjectDoesNotExist

@require_GET
def watch_video(request, video_id):
    try:
        patient = request.user.patient
    except ObjectDoesNotExist:
        messages.warning(request, "Please complete your profile first.")
        return redirect('create_patient_profile')

    video = get_object_or_404(Video, id=video_id)
    
    # تحديث السجل أو الإنشاء مع نسبة الإكمال
    progress_record, created = VideoProgress.objects.update_or_create(
        patient=patient,
        video=video,
        defaults={
            'watched': True,
            'completion_percentage': 100  # إضافة هذا الحقل إذا موجود في النموذج
        }
    )
    
    # احسب التقدم باستخدام الدالة المدمجة
    new_progress = calculate_progress(patient)
    
    if patient.progress != new_progress:
        patient.progress = new_progress
        patient.save(update_fields=['progress'])
    
    return render(request, 'video_player.html', {
        'video': video,
        'progress': new_progress,
        'file_url': video.video_file.url
    })












class VideoListView(LoginRequiredMixin, ListView):
    model = Video
    template_name = 'video_list.html'
    context_object_name = 'videos'
    
    def get_queryset(self):
        return Video.objects.filter(is_required=True).order_by('created_at')




class ProfileView(LoginRequiredMixin, DetailView):
    model = Patient
    template_name = 'profile.html'
    
    def get_object(self):
        return self.request.user.patient


class ProfileUpdateView(LoginRequiredMixin, UpdateView):
    model = Patient
    fields = ['gender', 'birth_date', 'address', 'phone_number']
    template_name = 'edit_profile.html'
    success_url = reverse_lazy("index")
    
    def get_object(self):
        return self.request.user.patient
    
    def form_valid(self, form):
        messages.success(self.request, "Profile updated successfully!")
        return super().form_valid(form)













@login_required
def questionnaire(request):
    try:
        patient = request.user.patient
    except ObjectDoesNotExist:
        messages.warning(request, "Please complete your profile first.")
        return redirect('create_patient_profile')

    answered_questions = PatientResponse.objects.filter(
        patient=patient
    ).values_list('question__id', flat=True)
    
    
    current_question = Question.objects.exclude(
        id__in=answered_questions
    ).order_by('order').first()


    
    if not current_question:
        messages.success(request, "You've completed all questions!")
        return redirect('dashboard')
    
    return render(request, 'questionnaire.html', {
        'question': current_question,
        'options': current_question.options.all().order_by('order')
    })







from django.db import IntegrityError

@login_required
def submit_answer(request, question_id):
    if request.method == 'POST':
        try:
            patient = request.user.patient
        except ObjectDoesNotExist:
            messages.warning(request, "Please complete your profile first.")
            return redirect('create_patient_profile')

        question = get_object_or_404(Question, id=question_id)
        
        try:
            selected_option = AnswerOption.objects.get(
                id=request.POST.get('option'),
                question=question
            )
        except (AnswerOption.DoesNotExist, ValueError):
            messages.error(request, "Invalid option selected.")
            return redirect('questionnaire')

        try:
            PatientResponse.objects.update_or_create(
                patient=patient,
                question=question,
                defaults={'selected_option': selected_option}
            )
        except IntegrityError:
            messages.error(request, "Database error occurred.")
            return redirect('questionnaire')
        
        # احسب التقدم مع الأوزان الجديدة
        patient.progress = calculate_progress(patient)
        patient.save()
        
        messages.success(request, f"Progress updated to {patient.progress}%!")
        return redirect('questionnaire')
    
    return redirect('dashboard')














def dashboard(request):
    patient = request.user.patient
    responses = PatientResponse.objects.filter(patient=patient)
    

    correct_answers = responses.filter(selected_option__is_correct=True).count()
    total_questions = Question.objects.count()
    

    timeline_data = []
    timeline_labels = []
    for idx, response in enumerate(responses.order_by('answered_at')):
        timeline_data.append(int((idx+1)/total_questions*100))
        timeline_labels.append(response.answered_at.strftime("%Y-%m-%d"))
    
    context = {
        'patient': patient,
        'correct_answers': correct_answers,
        'incorrect_answers': responses.count() - correct_answers,
        'total_questions': total_questions,
        'recent_answers': responses.order_by('-answered_at')[:10],
        'timeline_data': timeline_data,
        'timeline_labels': timeline_labels
    }
    return render(request, 'dashboard.html', context)









# Create your views here.
def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')

def appointment(request):
    return render(request,'appointment.html')

def service(request):
    return render(request,'service.html')


def relax(request):
    return render(request,'relax.html')

def breath(request):
    return render(request,'breath.html')

def quiz(request):
    return render(request,'quiz.html')


def anexity(request):
    return render(request,'anexity.html')


def te(request):
    return render(request,'te.html')

def dep2(request):
    return render(request,'dep2.html')
def dep3(request):
    return render(request,'dep3.html')
def dep4(request):
    return render(request,'dep4.html')
def dep5(request):
    return render(request,'dep5.html')

def advice(request):
    return render(request,'advice.html')

def team(request):
    return render(request,'team.html')


def dep(request):
    return render(request,'depression.html')    

def res(request):
    return render(request,'resources.html')

def therapy(request):
    return render(request,'therapy.html')

def support(request):
    return render(request,'support.html')

def groups(request):
    return render(request,'allgroups.html')

def online(request):
    return render(request,'online.html')

def contact(request):
    return render(request,'contact.html')









