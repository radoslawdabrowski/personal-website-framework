from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime

from root.models import DEFAULT_ID
from root.models import SkillCategory, Company


# Hobby entity
class Hobby(models.Model):
    name = models.CharField(null=False, blank=False, default="ERROR", max_length=30)
    icon = models.CharField(default='fa-file', max_length=20)

    def __str__(self):
        return self.name


# Skill entity
class Skill(models.Model):
    name = models.CharField(null=False, blank=False, default="ERROR", max_length=50)
    progress = models.IntegerField(default=0, validators=[
        MaxValueValidator(100),
        MinValueValidator(0)
    ])
    category = models.ForeignKey(SkillCategory, on_delete=models.DO_NOTHING, default=DEFAULT_ID)

    def __str__(self):
        return self.name


# Job entity
class Job(models.Model):
    position = models.CharField(null=False, blank=False, default='ERROR', max_length=100)
    company = models.ForeignKey(Company, on_delete=models.DO_NOTHING, default=DEFAULT_ID)
    start_date = models.DateField(null=False, blank=False, default=datetime.date.today)
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.position + '@' + self.company.name


# School entity
class School(models.Model):
    direction = models.CharField(null=False, blank=False, default='ERROR', max_length=100)
    school = models.ForeignKey(Company, on_delete=models.DO_NOTHING, default=DEFAULT_ID)
    start_date = models.DateField(null=False, blank=False, default=datetime.date.today)
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.direction + '@' + self.school.name
