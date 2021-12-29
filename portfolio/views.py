from django.shortcuts import render


def portfolio_view(request, *args, **kwargs):
    return render(request, 'projects.html', {})
