from django.conf.urls import url
from django.contrib import admin

import store.views

urlpatterns = [
    url(r'^$', store.views.StoreView.as_view()),
    url(r'^product/$', store.views.InventoryJsonView.as_view(),
        name="product_list"),
    url(r'^admin/', admin.site.urls),
]
