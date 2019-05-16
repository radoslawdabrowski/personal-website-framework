from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Hobby(models.Model):
    name = models.CharField(null=False, blank=False, default="ERROR", max_length=30)
    icon = models.CharField(default='fa-file', max_length=20)

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(null=False, blank=False, default="ERROR", max_length=50)
    progress = models.IntegerField(default=0, validators=[
        MaxValueValidator(100),
        MinValueValidator(0)
    ])

    def __str__(self):
        return self.name
