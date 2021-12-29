from django.db import models


# Attributes dictionary
class Attribute(models.Model):
    key = models.TextField()
    value = models.TextField()

    def __str__(self):
        return self.value

    def __len__(self):
        return len(self.value)


# Social page items
class Social(models.Model):
    icon = models.TextField(null=False, blank=False)
    url = models.TextField(null=False, blank=False)
    color = models.TextField(null=False, blank=False)

    def __str__(self):
        return self.url


# Website pages
class Page(models.Model):
    key = models.TextField(null=False, blank=False)
    description = models.TextField()
    value = models.BooleanField(null=False, default=False)

    def __str__(self):
        return self.key


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
