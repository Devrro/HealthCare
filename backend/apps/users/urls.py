from django.urls import path

from .views import AddAvatarView, CreateUserView, DisablePermissionView, EnablePermissionView, GetAvatarView, ListUser,\
    GetUserById, UsersListIdView

urlpatterns = [
    path('', ListUser.as_view()),
    path('/<int:pk>', GetUserById.as_view()),
    path('/add_user', CreateUserView.as_view()),
    path('/enable_is_staff/<int:pk>', EnablePermissionView.as_view()),
    path('/disable_is_staff/<int:pk>', DisablePermissionView.as_view()),
    path('/add_avatar', AddAvatarView.as_view()),
    path('/get_my_avatar', GetAvatarView.as_view()),
    path('/users_with_id', UsersListIdView.as_view()),
]
