from django.db import models


# Const
DEFAULT_ID = 1


# Skill Category dictionary
class SkillCategory(models.Model):
    name = models.CharField(null=False, blank=False, default='ERROR', max_length=100)

    def __str__(self):
        return self.name


# Company dictionary
class Company(models.Model):
    name = models.CharField(null=False, blank=False, default='ERROR', max_length=255)

    def __str__(self):
        return self.name


class BaseModel(models.Model):
    objects = models.Manager()

    class Meta:
        abstract = True
