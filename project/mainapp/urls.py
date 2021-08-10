from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from . import views

urlpatterns=[
    path('',views.index,name="index"),
    path('product_details/',views.prorduct_details,name='product_details'),
    path('cart/',views.cartshow,name='cart'),
    path('procced/',views.procced,name='procced'),
    path('login/',views.loginPage,name="loginPage")
]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)