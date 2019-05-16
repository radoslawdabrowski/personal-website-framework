from django.db import models


# Hobby entity
class Hobby(models.Model):
    name: models.CharField(null=False, blank=False, max_length=30)

    def __str__(self):
        return self.name


# Skill entity
class Skill(models.Model):
    name: models.CharField()

    def __str__(self):
        return self.name
