from django.db import models
from django.utils.translation import gettext_lazy as _


# Contact entity
class Contact(models.Model):
    name = models.CharField(default='NO_NAME', max_length=50, error_messages={
        'max_length': _("Field 'name' is to long")
    })
    email = models.CharField(default='NO_EMAIL', max_length=100, error_messages={
        'max_length': _("Field 'email' is to long")
    })
    message = models.TextField(default='NO_MESSAGE')

    def __str__(self):
        return self.email

