from decimal import Decimal
from django.conf import settings
from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField(null=True, blank=True)
    image_url = models.URLField(null=True, blank=True)

    def __str__(self):
        return self.title


class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=300)
    description = models.TextField(null=True, blank=True)
    image_url = models.URLField(null=True, blank=True)

    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.title

