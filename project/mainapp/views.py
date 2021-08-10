from django.shortcuts import redirect, render

# Create your views here.


def index(request):

    return render(request,'index.html')

def prorduct_details(request):

    return render(request,'pages/product_details.html')

def cartshow(request):

    return render(request,'pages/cart.html')

def procced(request):
    return render(request,'pages/procced.html')

def loginPage(request):

    return render(request,'pages/login&signup.html')