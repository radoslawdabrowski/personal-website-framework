from attributes.models import Attribute
from django.utils.translation import ugettext as _
from django.db.models.base import ObjectDoesNotExist


# getting attribute from model
def get_attribute(name):
    try:
        return Attribute.objects.filter(key=name).get()
    except ObjectDoesNotExist:
        return _('No Attribute')


# splitting list into 2 equal parts
def split_list(a_list):
    half = len(a_list)//2
    return a_list[half:], a_list[:half]
