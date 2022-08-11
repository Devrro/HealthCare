from django.urls import path

from .views import CreateUserView, DisablePermissionView, EnablePermissionView, ListUser

urlpatterns = [
    path('', ListUser.as_view()),
    path('/add_user', CreateUserView.as_view()),
    path('/enable_is_staff/<int:pk>', EnablePermissionView.as_view()),
    path('/disable_is_staff/<int:pk>', DisablePermissionView.as_view()),
]
