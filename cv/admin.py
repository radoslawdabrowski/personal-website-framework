from django.contrib import admin

from .models import Skill, Hobby, Job, School

# Models
admin.site.register(Hobby)
admin.site.register(Skill)
admin.site.register(Job)
admin.site.register(School)
