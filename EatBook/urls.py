from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('library/', views.library, name='library'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('searched_books/', views.searched_books, name='searched_books'),
    # path('logout/', views.logout, name='logout'),
]
