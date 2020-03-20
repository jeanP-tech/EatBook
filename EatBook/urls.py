from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.main_search, name='main'),
    path('library/', views.library, name='library'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    # path('<query>', views.search_books, name='search_books'),

    # path('logout/', views.logout, name='logout'),
]
