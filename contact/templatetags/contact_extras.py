from django import template

from contact.views import map_view_context, data_view_context

register = template.Library()


@register.inclusion_tag('components/contact/map.html')
def localization():
    return map_view_context()


@register.inclusion_tag('components/contact/data.html')
def data():
    return data_view_context()
