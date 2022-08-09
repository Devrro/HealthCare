from django.urls import path

from .views import ListUser

urlpatterns = [
    path('users', ListUser.as_view())
]
