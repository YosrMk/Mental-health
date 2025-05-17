from django.urls import path
from . import views
from django.contrib.auth import views as auth_views
from .views import ProfileView , ProfileUpdateView ,dashboard, submit_answer,questionnaire
from .views import watch_video, VideoListView


urlpatterns = [
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('appointment/',views.appointment,name='appointment'),
    path('service/',views.service,name='service'),
    path('relax/',views.relax,name='relax'),
    path('breath/',views.breath,name='breath'),
    path('quiz/',views.quiz,name='quiz'),
    path('anexity/',views.anexity,name='anexity'),
    path('te/',views.te,name='te'),
    path('dep2/',views.dep2,name='dep2'),
    path('dep3/',views.dep3,name='dep3'),
    path('dep4/',views.dep4,name='dep4'),
    path('dep5/',views.dep5,name='dep5'),
    path('advice/',views.advice,name='advice'),
    path('res/',views.res,name='res'),
    path('support/',views.support,name='support'),
    path('therapy/',views.therapy,name='therapy'),
    path('groups/',views.groups,name='groups'),
    path('online/',views.online,name='online'),
    path('team/',views.team,name='team'),
    path('dep/',views.dep,name='dep'),
    path('contact/',views.contact,name='contact'),

    # Authentication urls
    path('register/',views.register,name='register'),
    path('log/',views.log,name='log'),
    path('user_logout/', views.user_logout, name='user_logout'),

    path('profile/', ProfileView.as_view(), name='profile'),
    path('profile/edit/', ProfileUpdateView.as_view(), name='edit_profile'),


    path('videos/', VideoListView.as_view(), name='video_list'),
    path('video/<int:video_id>/', watch_video, name='watch_video'),



    path('dashboard/', dashboard, name='dashboard'),
    path('answer/<int:question_id>/', submit_answer, name='submit_answer'),


    path('questionnaire/', questionnaire, name='questionnaire'),
    path('submit-answer/<int:question_id>/', submit_answer, name='submit_answer'),



    path('password-reset/', 
         auth_views.PasswordResetView.as_view(
             template_name='password_reset.html',
             email_template_name='password_reset_email.html',
             success_url='/home/password-reset/done/'
         ), 
         name='password_reset'),
    
    path('password-reset/done/', 
         auth_views.PasswordResetDoneView.as_view(
             template_name='password_reset_done.html'
         ), 
         name='password_reset_done'),
    
    path('reset/<uidb64>/<token>/',
         auth_views.PasswordResetConfirmView.as_view(
             template_name='password_reset_confirm.html',
             success_url='/home/reset/done/'
         ),
         name='password_reset_confirm'),  
    
    path('reset/done/',
         auth_views.PasswordResetCompleteView.as_view(
             template_name='password_reset_complete.html'
         ),
         name='password_reset_complete'),


]