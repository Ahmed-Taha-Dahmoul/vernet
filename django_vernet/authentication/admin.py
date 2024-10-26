# authentication/admin.py

from django.contrib import admin
from .models import User, Student, Professor, StudyClass

class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'is_student', 'is_professor', 'is_active')

admin.site.register(User, UserAdmin)
admin.site.register(Student)
admin.site.register(Professor)
admin.site.register(StudyClass)
