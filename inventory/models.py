from django.db import models


class Category(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=300)
    description = models.TextField(null=True, blank=True)
    image_url = models.URLField(null=True, blank=True)
    # TODO: image field

    def __str__(self):
        return self.title


class Product(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    title = models.CharField(max_length=300)
    description = models.TextField(null=True, blank=True)
    image_url = models.URLField(null=True, blank=True)
    # TODO: image field
    category = models.ForeignKey(Category, related_name="products")

    price = models.DecimalField(max_digits=10, decimal_places=2)

    # is_active = models.BooleanField(default=True)
    # ...
    # is_sale_item = ....
    # barcode = ....

    def __str__(self):
        return self.title
