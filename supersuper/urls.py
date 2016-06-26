from django.conf.urls import url
from django.contrib import admin

import store.views

urlpatterns = [
    url(r'^$', store.views.StoreView.as_view()),
    url(r'^category/$', store.views.CategoryListAPIView.as_view(),
        name="category_list"),
    url(r'^category/(?P<pk>[0-9]+)/$', store.views.CategoryRetrieveAPIView.as_view(),
        name="category_detail"),
    url(r'^product/$', store.views.InventoryListAPIView.as_view(),
        name="product_list"),
    url(r'^product/(?P<pk>[0-9]+)/$', store.views.InventoryRetrieveAPIView.as_view(),
        name="product_retrieve"),
    url(r'^admin/', admin.site.urls),
]
