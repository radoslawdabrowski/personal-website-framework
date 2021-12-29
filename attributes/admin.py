from django.contrib import admin

from .models import Attribute, Social, Page, SkillCategory, Company

admin.site.register(Attribute)
admin.site.register(Social)
admin.site.register(Page)
admin.site.register(SkillCategory)
admin.site.register(Company)
