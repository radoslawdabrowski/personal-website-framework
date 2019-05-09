from django.shortcuts import render


def blog_list_view(request, *args, **kwargs):
    return render(request, 'list.html', {})


def blog_single_view(request, name):
    print(name)
    return render(request, 'article.html', {})
