from django.contrib import admin
from .models import *


admin.site.register(Patient)
admin.site.register(Video)
admin.site.register(VideoProgress)
admin.site.register(Question)
admin.site.register(AnswerOption)
admin.site.register(PatientResponse)