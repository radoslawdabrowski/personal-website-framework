from django.shortcuts import render
from django.core.paginator import Paginator

from blog.models import Post
from root.utils import get_attribute
from root.attributes import BLOG_ITEMS_PER_PAGE


def blog_view(request, *args, **kwargs):
    blog_list = Post.objects.all().order_by('-date')
    paginator = Paginator(blog_list, get_attribute(BLOG_ITEMS_PER_PAGE))

    page = request.GET.get('page')

    if page is None:
        page = 1

    posts = paginator.get_page(page)

    return render(request, "blog.html", {
        'posts': posts,
        'current_page': int(page)
    })


def single_blog_view(request, url):
    print(url)
    return render(request, "post.html", {})


def card_view_context(post, counter):
    return {
        'item': post,
        'classItem': counter % 5
    }


def paginator_view_context(posts, page):
    return {
        'items': posts,
        'current_page': page
    }
