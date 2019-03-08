from django.db import models


# Create your models here.
class SchoolType(models.Model):
    id = models.IntegerField(primary_key=True)
    value = models.TextField(null=False, default='')

    def __str__(self):
        return self.value


class School(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.TextField(null=False, blank=True, default='')
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=False)
    description = models.TextField(null=True, blank=True)
    type = models.OneToOneField(
        SchoolType,
        on_delete=models.DO_NOTHING,
        null=False,
        default=1
    )
    order = models.IntegerField(null=False, default=1)

    def __str__(self):
        return self.name

