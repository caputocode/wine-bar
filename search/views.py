from django.shortcuts import render
from products.models import Wine
# Create your views here.

def do_search(request):
    wines = Wine.objects.filter(name__icontains=request.GET['q'])
    return render(request, 'products.html', {'wines': wines})