from django.db import models


class AttributeEntity(models.Model):
    key = models.TextField()
    value = models.TextField()

    def __str__(self):
        return self.value


class SocialEntity(models.Model):
    icon = models.TextField(null=False, blank=False)
    url = models.TextField(null=False, blank=False)
    color = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.url
