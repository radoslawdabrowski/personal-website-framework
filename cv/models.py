from django.db import models


# Create your models here
class EducationTypeEntity(models.Model):
    name = models.TextField()

    def __str__(self):
        return self.name


class EducationEntity(models.Model):
    symbol = models.TextField(max_length=1)
    title = models.ForeignKey(EducationTypeEntity, on_delete=models.DO_NOTHING)
    name = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
