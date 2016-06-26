from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView
from django.views.generic.base import View

from inventory.models import Product


class StoreView(TemplateView):
    template_name = "store/store.html"


class InventoryJsonView(View):
    def get(self, request):
        qs = Product.objects.all()
        payload = [{
                       'id': p.id,
                       'title': p.title,
                       'description': p.description,
                       'price': p.price,
                       'image_url': p.image_url,

                   } for p in qs]
        return JsonResponse(payload, safe=False)
        # return JsonResponse({'items':payload})
