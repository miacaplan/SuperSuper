from django.views.generic import TemplateView
from rest_framework.generics import RetrieveAPIView, ListAPIView

from inventory.models import Product, Category
from inventory.serializers import ProductSerializer, MinimalProductSerializer, \
    CategorySerializer


class StoreView(TemplateView):
    template_name = "store/store.html"


class CategoryListAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRetrieveAPIView(RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class InventoryListAPIView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = MinimalProductSerializer


class InventoryRetrieveAPIView(RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
