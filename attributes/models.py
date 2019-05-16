from django.db import models


class Attribute(models.Model):
    key = models.TextField()
    value = models.TextField()

    def __str__(self):
        return self.value


class Social(models.Model):
    icon = models.TextField(null=False, blank=False)
    url = models.TextField(null=False, blank=False)
    color = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.url
