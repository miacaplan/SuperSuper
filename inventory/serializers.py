from rest_framework import serializers
from . import models


class MinimalProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = (
            'id',
            'category',
            'title',
            'image_url',
            'price',
        )


class ProductSerializer(MinimalProductSerializer):
    class Meta(MinimalProductSerializer.Meta):
        fields = MinimalProductSerializer.Meta.fields + (
            'description',
        )


class CategorySerializer(serializers.ModelSerializer):
    products = MinimalProductSerializer(many=True)

    class Meta:
        model = models.Category
        fields = (
            'id',
            'title',
            'image_url',
            'products',
        )