from django.db import models
from root.models import DEFAULT_ID
from django.utils.translation import gettext_lazy as _
import datetime


# Post entity
class Post(models.Model):
    title = models.CharField(null=False, blank=False, default='ERROR', max_length=255)
    url = models.CharField(null=False, blank=False, default='ERROR', max_length=255)
    img = models.FileField(null=True, blank=True)
    content = models.TextField(null=False, blank=True)
    description = models.TextField(null=False, blank=False, default='ERROR', max_length=511)
    date = models.DateField(default=datetime.date.today)


# Tag dictionary
class Tag(models.Model):
    name = models.CharField(null=False, blank=False, default='ERROR', max_length=30)
    post = models.ForeignKey(Post, on_delete=models.DO_NOTHING, default=DEFAULT_ID)


# Comment entity
class Comment(models.Model):
    name = models.TextField(null=False, blank=False, default='NO_NAME', max_length=50, error_messages={
        'max_length': _("Your name is too long"),
        'blank': _("You need to fill your name"),
        'null': _("You need to fill your name")
    })
    email = models.TextField(null=False, blank=False, default='NO_EMAIL', max_length=50, error_messages={
        'max_length': _("Your email is too long"),
        'blank': _("You need to fill your email"),
        'null': _("You need to fill your email")
    })
    content = models.TextField(null=False, blank=False, default='NO_CONTENT', max_length=255, error_messages={
        'max_length': _("Your comment is too long"),
        'blank': _("You need to fill the comment"),
        'null': _("You need to fill the comment")
    })
    date = models.DateField(default=datetime.date.today)
    post = models.ForeignKey(Post, on_delete=models.DO_NOTHING, default=DEFAULT_ID)
