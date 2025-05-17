from .models import VideoProgress, PatientResponse, Question, Video

def calculate_progress(patient):
    # حساب التقدم من الفيديوهات
    video_weight = 0.5  # 50% من التقدم
    video_progress = VideoProgress.objects.filter(
        patient=patient,
        watched=True,
        video__is_required=True
    ).count()
    total_videos = Video.objects.filter(is_required=True).count()
    video_percent = (video_progress / total_videos * 100) * video_weight if total_videos > 0 else 0

    # حساب التقدم من الإجابات
    quiz_weight = 0.5  # 50% من التقدم
    correct_answers = PatientResponse.objects.filter(
        patient=patient,
        selected_option__is_correct=True
    ).count()
    total_questions = Question.objects.count()
    quiz_percent = (correct_answers / total_questions * 100) * quiz_weight if total_questions > 0 else 0

    # التقدم الكلي
    total_progress = video_percent + quiz_percent
    return min(round(total_progress), 100)  # تقريب إلى أقرب عدد صحيح
