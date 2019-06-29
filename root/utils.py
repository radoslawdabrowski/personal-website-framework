from attributes.models import Attribute
from django.utils.translation import ugettext as _
from django.db.models.base import ObjectDoesNotExist


# getting attribute from model
def get_attribute(name):
    try:
        attribute = Attribute.objects.filter(key=name).get()
        return attribute.value
    except ObjectDoesNotExist:
        return _('No Attribute')


# splitting list into 2 equal parts
def split_list(a_list):
    half = len(a_list)//2
    return a_list[half:], a_list[:half]


# getting 0.# number for wow parameter based on record index
def divide_index(value, divide_by):
    return float(value) / divide_by
