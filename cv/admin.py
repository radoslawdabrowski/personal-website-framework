from django.contrib import admin

from .models import EducationEntity, EducationTypeEntity

# Register your models here.
admin.site.register(EducationTypeEntity)
admin.site.register(EducationEntity)
