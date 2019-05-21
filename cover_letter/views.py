from django.shortcuts import render


def cover_main_view(request, *args):
    return render(request, "cover.html", {})


def letter_view_context():
    return {}


def reference_view_context():
    return {}
