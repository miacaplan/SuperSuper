from django.views.generic import TemplateView
from rest_framework import viewsets

from inventory.models import Product, Category
from inventory.serializers import ProductSerializer, CategorySerializer


class StoreView(TemplateView):
    template_name = "store/store.html"


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
