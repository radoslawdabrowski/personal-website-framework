from django.db import models
from root.models import DEFAULT_ID, BaseModel
from django.utils.translation import gettext_lazy as _
import datetime


# Post entity
class Post(BaseModel):
    title = models.CharField(null=False, blank=False, default='ERROR', max_length=255)
    url = models.CharField(null=False, blank=False, default='ERROR', max_length=255)
    img = models.ImageField(null=True, blank=True)
    content = models.TextField(null=False, blank=True)
    description = models.TextField(null=False, blank=False, default='ERROR', max_length=511)
    date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.url


# Tag dictionary
class Tag(BaseModel):
    name = models.CharField(null=False, blank=False, default='ERROR', max_length=30)
    posts = models.ManyToManyField(Post)

    def __str__(self):
        return self.name


# Comment entity
class Comment(BaseModel):
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
