from django.shortcuts import render, redirect, HttpResponseRedirect

# Create your views here.
def index(request):
    """A view that displays the index page"""
    return render(request, "index.html")
    

def concept(request):
    """A view that displays the concept page"""
    return render(request, "concept.html")

def contact(request):
    """A view that displays the contact us page"""
    return render(request, "contact.html")
    