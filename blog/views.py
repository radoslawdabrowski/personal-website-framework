from django.shortcuts import render, redirect
from django.core.paginator import Paginator
from django.db.models.base import ObjectDoesNotExist

from blog.models import Post, Comment
from root.utils import get_attribute
from root.attributes import BLOG_ITEMS_PER_PAGE


def blog_view(request, *args, **kwargs):
    blog_list = Post.objects.all().order_by('-date')

    items_per_page = get_attribute(BLOG_ITEMS_PER_PAGE)
    page = request.GET.get('page')

    if items_per_page is None or items_per_page == 'No Attribute':
        items_per_page = 10

    if page is None:
        page = 1

    paginator = Paginator(blog_list, items_per_page)
    posts = paginator.get_page(page)

    return render(request, "blog.html", {
        'posts': posts,
        'current_page': int(page)
    })


def single_blog_view(request, url):
    try:
        post = Post.objects.filter(url=url).get()
        print(post.tag_set.all())
        try:
            img_url = post.img.url
        except ValueError:
            img_url = ''
        return render(request, "post.html", {
            'item': post,
            'img': img_url,
            'tags': ', '.join([str(i) for i in post.tag_set.all()])
        })
    except ObjectDoesNotExist:
        redirect('/blog')


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


def comments_view_content(post):
    comments = Comment.objects.filter(post=post).order_by('date')
    return {
        'comments': comments
    }


def comment_view_content(comment):
    return {
        'comment': comment
    }
