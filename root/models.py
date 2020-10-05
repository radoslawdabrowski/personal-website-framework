from django.db import models


# Const
DEFAULT_ID = 1


class BaseModel(models.Model):
    objects = models.Manager()

    class Meta:
        abstract = True
