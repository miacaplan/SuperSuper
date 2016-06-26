from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter

import store.views

router = DefaultRouter()
router.register(r'category', store.views.CategoryViewSet)
router.register(r'product', store.views.ProductViewSet)

urlpatterns = [
    url(r'^$', store.views.StoreView.as_view()),
    url('api/', include(router.urls, 'api')),
    url(r'^admin/', admin.site.urls),
]
