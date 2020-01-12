from urllib.parse import urlencode
import hashlib

from django import template
from django.conf import settings
from django.utils.html import escape

GRAVATAR_URL_PREFIX = getattr(settings, "GRAVATAR_URL_PREFIX", "https://www.gravatar.com/")
GRAVATAR_DEFAULT_IMAGE = getattr(settings, "GRAVATAR_DEFAULT_IMAGE", "")
GRAVATAR_DEFAULT_RATING = getattr(settings, "GRAVATAR_DEFAULT_RATING", "g")
GRAVATAR_DEFAULT_SIZE = getattr(settings, "GRAVATAR_DEFAULT_SIZE", 110)
GRAVATAR_IMG_CLASS = getattr(settings, "GRAVATAR_IMG_CLASS", "gravatar")

register = template.Library()


def _imgclass_attr():
    if GRAVATAR_IMG_CLASS:
        return ' class="%s"' % (GRAVATAR_IMG_CLASS,)
    return ''


def _wrap_img_tag(url, info, size):
    return '<img src="%s" %s alt="Avatar for %s" class="responsive-img"/>' % \
           (escape(url), _imgclass_attr(), info)


def _get_gravatar_id(email):
    return hashlib.md5(email.encode('utf-8')).hexdigest()


@register.simple_tag
def gravatar_for_email(email, size=None, rating=None):
    gravatar_url = "%savatar/%s" % (GRAVATAR_URL_PREFIX, _get_gravatar_id(email))

    parameters = [p for p in (
        ('d', GRAVATAR_DEFAULT_IMAGE),
        ('s', size or GRAVATAR_DEFAULT_SIZE),
        ('r', rating or GRAVATAR_DEFAULT_RATING),
    ) if p[1]]

    if parameters:
        gravatar_url += '?' + urlencode(parameters, doseq=True)

    return escape(gravatar_url)


@register.simple_tag
def gravatar_img_for_email(email, size=None, rating=None):
    gravatar_url = gravatar_for_email(email, size, rating)
    return _wrap_img_tag(gravatar_url, email, size)


