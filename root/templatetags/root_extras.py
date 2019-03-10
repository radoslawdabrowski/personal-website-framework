from django import template

from root.views import sidebar_view_context, footer_view_context

register = template.Library()


@register.inclusion_tag('components/sidebar.html')
def sidebar():
    return sidebar_view_context()


@register.inclusion_tag('components/footer.html')
def footer():
    return footer_view_context()


@register.simple_tag
def get_title():
    return 'Radek Dąbrowski'


@register.simple_tag
def get_description():
    return ''


@register.simple_tag
def get_keywords():
    return ''
