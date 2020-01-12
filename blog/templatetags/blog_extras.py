from django import template

from blog.views import card_view_context, paginator_view_context, comments_view_content, comment_view_content

register = template.Library()


@register.inclusion_tag('components/blog/card.html')
def post(item, counter):
    return card_view_context(item, counter)


@register.inclusion_tag('components/blog/paginator.html')
def pagination(posts, page):
    return paginator_view_context(posts, page)


@register.inclusion_tag('components/blog/comments/list.html')
def comments(post_item):
    return comments_view_content(post_item)


@register.inclusion_tag('components/blog/comments/item.html')
def comment(item):
    return comment_view_content(item)
