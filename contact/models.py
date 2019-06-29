from django.db import models
from django.utils.translation import gettext_lazy as _


# Contact entity
class Contact(models.Model):
    name = models.CharField(default='NO_NAME', max_length=50, error_messages={
        'max_length': _("Your name is too long"),
        'blank': _("You need to fill your name"),
        'null': _("You need to fill your name")
    })
    email = models.CharField(default='NO_EMAIL', max_length=100, error_messages={
        'max_length': _("Your email is too long"),
        'blank': _("You need to fill your email"),
        'null': _("You need to fill your email")
    })
    message = models.TextField(default='NO_MESSAGE', error_messages={
        'blank': _("You need to fill the message"),
        'null': _("You need to fill the message")
    })

    def __str__(self):
        return self.email
