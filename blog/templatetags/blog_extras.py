from django import template

from blog.views import card_view_context, paginator_view_context

register = template.Library()


@register.inclusion_tag('components/blog/card.html')
def post(item, counter):
    return card_view_context(item, counter)


@register.inclusion_tag('components/blog/paginator.html')
def pagination(posts, page):
    return paginator_view_context(posts, page)
