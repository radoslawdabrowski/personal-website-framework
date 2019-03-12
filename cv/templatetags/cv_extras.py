from django import template

from cv.views import interests_view_context, education_view_context, experience_view_context, about_view_context, skills_view_context

register = template.Library()


@register.inclusion_tag('components/education.html')
def education():
    return education_view_context()


@register.inclusion_tag('components/experience.html')
def experience():
    return experience_view_context()


@register.inclusion_tag('components/intertests.html')
def interests():
    return interests_view_context()


@register.inclusion_tag('components/about.html')
def about():
    return about_view_context()


@register.inclusion_tag('components/skills.html')
def skills():
    return skills_view_context()
