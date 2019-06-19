from django.test import TestCase
from .models import Wine

# Create your tests here.
class WineTests(TestCase):
    """
    Define tests that run against Wine models
    """

    def test_str(self):
        test_name = Wine(name='A wine')
        self.assertEqual(str(test_name), 'A wine')
