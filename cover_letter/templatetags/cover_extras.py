from django import template

from cover_letter.views import letter_view_context, references_view_context, reference_view_context
from root.utils import divide_index

register = template.Library()


@register.inclusion_tag('components/cover/letter.html')
def letter():
    return letter_view_context()


@register.inclusion_tag('components/cover/references.html')
def references():
    return references_view_context()


@register.inclusion_tag('components/cover/single/reference.html')
def reference(item, wow):
    return reference_view_context(item, divide_index(wow, 10))
