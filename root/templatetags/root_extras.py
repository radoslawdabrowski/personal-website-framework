from django import template
from django.utils.translation import ugettext as _

from root.views import sidebar_view_context, footer_view_context, loading_view_context, header_view_context

register = template.Library()


@register.inclusion_tag('components/loading.html')
def loading():
    return loading_view_context()


@register.inclusion_tag('components/sidebar.html')
def sidebar():
    return sidebar_view_context()


@register.inclusion_tag('components/footer.html')
def footer():
    return footer_view_context()


@register.inclusion_tag('components/header.html')
def header():
    return header_view_context()


@register.simple_tag
def get_title():
    return 'Radek Dąbrowski'


@register.simple_tag
def get_description():
    return ''


@register.simple_tag
def get_keywords():
    return ''


@register.simple_tag
def get_no_content():
    return _('Comming back soon')
