from django.contrib import admin

from .models import EducationEntity, EducationTypeDictionary, ExperienceEntity, CompanyDictionary, JobPositionDictionary

# Register your models here.
# dictionaries
admin.site.register(EducationTypeDictionary)
admin.site.register(JobPositionDictionary)
admin.site.register(CompanyDictionary)

# entities
admin.site.register(EducationEntity)
admin.site.register(ExperienceEntity)
