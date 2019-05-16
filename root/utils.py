from attributes.models import Attribute
from django.utils.translation import ugettext as _
from django.db.models.base import ObjectDoesNotExist


# getting attribute from model
def get_attribute(name):
    try:
        return Attribute.objects.filter(key=name).get()
    except ObjectDoesNotExist:
        return _('No Attribute')
