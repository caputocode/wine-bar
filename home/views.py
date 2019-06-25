from django.shortcuts import render, redirect, HttpResponseRedirect

# Create your views here.
def index(request):
    """A view that displays the index page"""
    return render(request, "index.html")
   
def about(request):
    """A view that displays the concept page"""
    return render(request, "about.html")
    
def events(request):
    """A view that displays the concept page"""
    return render(request, "events.html")

def contact(request):
    """A view that displays the contact us page"""
    return render(request, "contact.html")
    
def menu(request):
    """A view that displays the menu page"""
    return render(request, "menu.html")
    