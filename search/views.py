from django.shortcuts import render
from products.models import Wine
from django.db.models import Q
# Create your views here.

def do_search(request):
    wines = Wine.objects.filter(Q(name__icontains=request.GET['q']) | Q(grape__icontains=request.GET['q']) | Q(colour__icontains=request.GET['q']))
    return render(request, 'products.html', {'wines': wines})
    

