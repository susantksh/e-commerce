from unicodedata import name
from django.urls import  path
from . import views


urlpatterns = [
    path('', views.store, name='store'),
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('update-cart/', views.UpdateCart, name='update-cart'),
    path('process-order/', views.processOrder, name='process-order'),

    
]

