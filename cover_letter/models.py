from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
import datetime

from root.models import DEFAULT_ID
from attributes.models import Company


class Reference(models.Model):
    who = models.CharField(null=False, blank=False, default='ERROR', max_length=50)
    position = models.CharField(null=False, blank=False, default='ERROR', max_length=100)
    company = models.ForeignKey(Company, on_delete=models.DO_NOTHING, default=DEFAULT_ID)
    description = models.TextField(null=False, blank=False, default='ERROR')
    rating = models.IntegerField(default=5, validators=[
        MaxValueValidator(5),
        MinValueValidator(1)
    ])
    date = models.DateField(null=False, blank=False, default=datetime.date.today)

    def __str__(self):
        return self.who
