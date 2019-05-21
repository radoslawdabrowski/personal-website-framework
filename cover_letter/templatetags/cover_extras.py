from django import template

from cover_letter.views import letter_view_context, reference_view_context

register = template.Library()


@register.inclusion_tag('components/letter.html')
def letter():
    return letter_view_context()


@register.inclusion_tag('components/reference.html')
def reference():
    return reference_view_context()