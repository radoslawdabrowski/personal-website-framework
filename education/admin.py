from django.contrib import admin

# Register your models here.

from .models import School, SchoolType

admin.site.register(School)
admin.site.register(SchoolType)
