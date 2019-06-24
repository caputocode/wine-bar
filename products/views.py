from django.shortcuts import render, get_object_or_404
from .models import Wine


def display_wines(request):
    """
    View to show all wines available
    """
    wines = Wine.objects.all().order_by('price')
    return render(request, 'wines.html', {'wines': wines})
 
def wine_detail(request, pk):
    """
    Create a view that returns a single wine object
    based on the wine ID (pk) and render it to the
    'wine-detail.html' template. Or return a 404 error
    if the post is not found
    """
    wine = get_object_or_404(Wine, pk=pk)
    wine.save()
    return render(request, 'wine-detail.html', {'wine': wine })

