from django.urls import path

from . import views

urlpatterns = [

    # start login
    path('login/', views.user_info, name='login'), 
    path('signup/', views.user_list, name='signup')

    
    
]