from django.contrib import admin

from .models import EducationEntity, EducationTypeEntity, AttributeEntity

# Register your models here.
admin.site.register(EducationTypeEntity)
admin.site.register(EducationEntity)
admin.site.register(AttributeEntity)
