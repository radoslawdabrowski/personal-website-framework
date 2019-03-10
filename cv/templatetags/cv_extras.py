from django import template

from cv.views import intertests_view_context, education_view_context, experience_view_context

register = template.Library()


@register.inclusion_tag('components/education.html')
def education():
    return education_view_context()


@register.inclusion_tag('components/experience.html')
def experience():
    return experience_view_context()


@register.inclusion_tag('components/intertests.html')
def intertests():
    return intertests_view_context()
