from django import template
from django.utils.translation import ugettext as _

from cv.views import education_view_context, experience_view_context, interests_view_context, skills_view_context
from cv.views import skill_view_context, school_view_context, hobby_view_context, job_view_context
from cv.views import date_view_context
from root.utils import divide_index

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


@register.inclusion_tag('components/cv/single/school.html')
def school(item, wow=2):
    return school_view_context(item, divide_index(wow, 10))


@register.inclusion_tag('components/cv/single/job.html')
def job(item, wow=2):
    return job_view_context(item, divide_index(wow, 10))


@register.inclusion_tag('components/cv/single/hobby.html')
def hobby(item):
    return hobby_view_context(item)


@register.inclusion_tag('components/cv/single/skill.html')
def skill(item):
    return skill_view_context(item)


@register.inclusion_tag('components/cv/utils/date.html')
def date(start, end):
    return date_view_context(start, end)

