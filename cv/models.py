from django.db import models


# Create your models here
class EducationTypeDictionary(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name


class EducationEntity(models.Model):
    symbol = models.TextField(max_length=1)
    title = models.ForeignKey(EducationTypeDictionary, on_delete=models.DO_NOTHING)
    name = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class CompanyDictionary(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name


class JobPositionDictionary(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name


class ExperienceEntity(models.Model):
    symbol = models.TextField(max_length=1)
    title = models.ForeignKey(JobPositionDictionary, on_delete=models.DO_NOTHING)
    company = models.ForeignKey(CompanyDictionary, on_delete=models.DO_NOTHING)
    description = models.TextField(null=True, blank=True)
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title


class InterestEntity(models.Model):
    icon = models.TextField(null=False, blank=False)
    name = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.name

