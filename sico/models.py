from django.db import models
from django.conf import settings
from django.core.validators import FileExtensionValidator

from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _



class Patient(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='patient'
    )


    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    progress = models.PositiveIntegerField(default=0) 
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=True)

    birth_date = models.DateField(null=True, blank=True)
    
    address = models.TextField(blank=True)
    phone_number = models.CharField(max_length=20, blank=True)

    birth_date = models.DateField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username}'s Profile"
    



class Video(models.Model):
    title = models.CharField(max_length=200)  
    duration = models.DurationField()  
    is_required = models.BooleanField(default=True) 
    video_file = models.FileField(
        upload_to='videos/',
        validators=[FileExtensionValidator(allowed_extensions=['mp4', 'mov', 'avi'])]
    )
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    

class VideoProgress(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE) 
    completion_percentage = models.FloatField(default=0.0)
    video = models.ForeignKey(Video, on_delete=models.CASCADE)  
    watched = models.BooleanField(default=False)  
    watched_at = models.DateTimeField(auto_now_add=True)  

    class Meta:
        unique_together = ('patient', 'video')





class Question(models.Model):
    QUESTION_TYPES = [
        ('MC', 'Multiple Choice'),
        ('SC', 'Single Choice'),
        ('TF', 'True/False'),
    ]
    
    text = models.TextField(
        verbose_name=_("Question Text"),
        help_text=_("Enter the full question text here")
    )
    
    question_type = models.CharField(
        max_length=2,
        choices=QUESTION_TYPES,
        default='MC',
        verbose_name=_("Question Type"),
        db_index=True
    )
    order = models.PositiveIntegerField(
        default=0
    )
        
    explanation = models.TextField(
        verbose_name=_("Answer Explanation"),
        blank=True,
        help_text=_("Detailed explanation of the correct answer")
    )
    
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Creation Date"
    )

    class Meta:
        verbose_name = _("Question")
        verbose_name_plural = _("Questions")
        ordering = ['-created_at']
        ordering = ['order'] 

    def __str__(self):
        return f"{self.text[:50]}..."

class AnswerOption(models.Model):
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        related_name='options',
        verbose_name=_("Question"),
        db_index=True
    )
    
    text = models.CharField(
        max_length=200,
        verbose_name=_("Option Text")
    )
    
    is_correct = models.BooleanField(
        default=False,
        verbose_name=_("Is Correct Answer?")
    )
    
    score = models.IntegerField(
        default=0,
        verbose_name=_("Score"),
        validators=[
            MinValueValidator(-10),
            MaxValueValidator(10)
        ]
    )
    
    order = models.PositiveIntegerField(
        default=0,
        verbose_name=_("Display Order")
    )

    class Meta:
        verbose_name = _("Answer Option")
        verbose_name_plural = _("Answer Options")
        ordering = ['order']

    def __str__(self):
        return f"{self.text[:30]} ({self.question.id})"

class PatientResponse(models.Model):
    patient = models.ForeignKey(
        'Patient',
        on_delete=models.CASCADE,
        related_name='responses',
        verbose_name=_("Patient"),
        db_index=True
    )
    
    question = models.ForeignKey(
        Question,
        on_delete=models.CASCADE,
        related_name='patient_responses',
        verbose_name=_("Question")
    )
    
    selected_option = models.ForeignKey(
        AnswerOption,
        on_delete=models.CASCADE,
        verbose_name=_("Selected Option")
    )
    
    answered_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name=_("Answer Time")
    )

    class Meta:
        verbose_name = _("Patient Response")
        verbose_name_plural = _("Patient Responses")
        unique_together = ('patient', 'question')
        ordering = ['-answered_at']

    def __str__(self):
        return f"{self.patient.user.username} - {self.question.text[:30]}"