from django import template
from contact.views import contact_view_context

register = template.Library()


@register.inclusion_tag('contact.html')
def contact():
    return contact_view_context()
