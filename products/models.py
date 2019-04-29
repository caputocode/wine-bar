from django.db import models
# Create your models here.

class Wine(models.Model):
    """
    Model for each Wine
    """
    
    name = models.CharField(max_length=254, default='')
    alcohol = models.CharField(max_length=254, blank=False, default='')
    grape = models.CharField(max_length=254, blank=False, default='')
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image = models.ImageField(upload_to='images')
    
    def __str__(self):
        """
        Returns a String with name of wine
        """
        return self.name
        
