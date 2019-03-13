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
def get_website_title():
    return 'Radosław Dąbrowski'


@register.simple_tag
def get_description():
    return ''


@register.simple_tag
def get_keywords():
    return ''


@register.simple_tag
def get_no_content():
    return _('Comming back soon')


@register.simple_tag
def get_position():
    return _('Java Developer')


@register.simple_tag
def get_name():
    return 'Radosław Dąbrowski'


@register.simple_tag
def get_email():
    return 'kontakt@radoslawdabrowski.pl'


@register.simple_tag
def get_phone():
    return '+48 508 630 984'


@register.simple_tag
def get_website():
    return 'radoslawdabrowski.pl'


@register.simple_tag
def get_social():
    # todo database gather informatins
    return [
        {
            'icon': 'fa-linkedin-in',
            'url': 'https://www.linkedin.com/in/dabrowskiradoslaw',
            'color': 'blue darken-3'
        },
        {
            'icon': 'fa-github',
            'url': 'https://github.com/radoslawdabrowski',
            'color': 'grey darken-3'
        },
        {
            'icon': 'fa-stack-overflow',
            'url': 'https://stackoverflow.com/users/4693532/humblehunter',
            'color': 'orange darken-2'
        },
        {
            'icon': 'fa-codiepie',
            'url': 'https://codeboards.io/profiles/93526',
            'color': 'red darken-2'
        }
    ]

