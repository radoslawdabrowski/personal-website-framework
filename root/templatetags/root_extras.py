from django import template
from django.utils.translation import ugettext as _

from root.views import navigation_view_context, sidebar_view_context, footer_view_context, social_view_context
from root.views import description_view_context, mobile_view_context, email_view_context, header_view_context
from root.views import should_page_be_visible

from root.utils import get_attribute
from root.attributes import ATTRIBUTE_DESCRIPTION, ATTRIBUTE_EMAIL, ATTRIBUTE_JOB_POSITION, ATTRIBUTE_NAME
from root.attributes import ATTRIBUTE_WEBSITE, ATTRIBUTE_WEBSITE_KEYWORDS, ATTRIBUTE_WEBSITE_TITLE, ATTRIBUTE_PHONE

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
    return get_attribute(ATTRIBUTE_WEBSITE_TITLE)


@register.simple_tag
def get_keywords():
    return get_attribute(ATTRIBUTE_WEBSITE_KEYWORDS)


@register.simple_tag
def get_no_content():
    return _('Comming back soon')


@register.simple_tag
def get_description():
    return get_attribute(ATTRIBUTE_DESCRIPTION)


@register.simple_tag
def get_position():
    return get_attribute(ATTRIBUTE_JOB_POSITION)


@register.simple_tag
def get_name():
    return get_attribute(ATTRIBUTE_NAME)


@register.simple_tag
def get_email():
    return get_attribute(ATTRIBUTE_EMAIL)


@register.simple_tag
def get_phone():
    return get_attribute(ATTRIBUTE_PHONE)


@register.simple_tag
def get_website():
    return get_attribute(ATTRIBUTE_WEBSITE)


@register.simple_tag
def is_page_visible(page):
    return should_page_be_visible(page)

