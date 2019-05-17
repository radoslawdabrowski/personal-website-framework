from django.contrib import admin

from .models import Company, SkillCategory
from .models import Skill, Hobby, Job, School

# Dictionaries
admin.site.register(Company)
admin.site.register(SkillCategory)

# Models
admin.site.register(Hobby)
admin.site.register(Skill)
admin.site.register(Job)
admin.site.register(School)
