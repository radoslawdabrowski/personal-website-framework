from django.db import models


# Create your models here.
class AttributeEntity(models.Model):
    key = models.TextField()
    value = models.TextField()

    def __str__(self):
        return self.value
