from django import template
from django.utils.translation import ugettext as _

from cv.views import education_view_context, experience_view_context, interests_view_context, skills_view_context

register = template.Library()


@register.inclusion_tag('components/cv/education.html')
def education():
    return education_view_context()


@register.inclusion_tag('components/cv/experience.html')
def experience():
    return experience_view_context()


@register.inclusion_tag('components/cv/interests.html')
def interests():
    return interests_view_context()


@register.inclusion_tag('components/cv/skills.html')
def skills():
    return skills_view_context()
