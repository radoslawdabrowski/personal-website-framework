from django import template
from django.utils.translation import ugettext as _

from root.views import navigation_view_context, sidebar_view_context, footer_view_context, social_view_context
from root.views import description_view_context, mobile_view_context, email_view_context, header_view_context
from attributes.models import Attribute, Social

register = template.Library()


@register.inclusion_tag('components/nav.html')
def navigation():
    return navigation_view_context()


@register.inclusion_tag('components/sidebar.html')
def sidebar():
    return sidebar_view_context()


@register.inclusion_tag('components/footer.html')
def footer():
    return footer_view_context()


@register.inclusion_tag('components/extra/social.html')
def social():
    return social_view_context()


@register.inclusion_tag('components/extra/description.html')
def description():
    return description_view_context()


@register.inclusion_tag('components/extra/mobile.html')
def mobile():
    return mobile_view_context()


@register.inclusion_tag('components/extra/header.html')
def header():
    return header_view_context()


@register.inclusion_tag('components/extra/email.html')
def email():
    return email_view_context()


@register.simple_tag
def get_website_title():
    return Attribute.objects.filter(key="ATTRIBUTE_WEBSITE_TITLE").get()


@register.simple_tag
def get_description():
    return Attribute.objects.filter(key="ATTRIBUTE_WEBSITE_DESC").get()


@register.simple_tag
def get_keywords():
    return Attribute.objects.filter(key="ATTRIBUTE_WEBSITE_KEYWORDS").get()


@register.simple_tag
def get_no_content():
    return _('Comming back soon')


@register.simple_tag
def get_position():
    return Attribute.objects.filter(key="ATTRIBUTE_JOB_POSITION").get()


@register.simple_tag
def get_name():
    return Attribute.objects.filter(key="ATTRIBUTE_NAME").get()


@register.simple_tag
def get_email():
    return Attribute.objects.filter(key="ATTRIBUTE_EMAIL").get()


@register.simple_tag
def get_phone():
    return Attribute.objects.filter(key="ATTRIBUTE_PHONE").get()


@register.simple_tag
def get_website():
    return Attribute.objects.filter(key="ATTRIBUTE_WEBSITE").get()


@register.simple_tag
def get_social():
    return Social.objects.all()
    # return [
    #     {
    #         'icon': 'fa-linkedin-in',
    #         'url': 'https://www.linkedin.com/in/dabrowskiradoslaw',
    #         'color': 'blue darken-3'
    #     },
    #     {
    #         'icon': 'fa-github',
    #         'url': 'https://github.com/radoslawdabrowski',
    #         'color': 'grey darken-3'
    #     },
    #     {
    #         'icon': 'fa-stack-overflow',
    #         'url': 'https://stackoverflow.com/users/4693532/humblehunter',
    #         'color': 'orange darken-2'
    #     },
    #     {
    #         'icon': 'fa-codiepie',
    #         'url': 'https://codeboards.io/profiles/93526',
    #         'color': 'red darken-2'
    #     }
    # ]

