from django.contrib.auth import get_user_model

from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from core.permissions.user_permission import IsStaffPermission

from apps.users.serializers import UserSerializer

UserModel = get_user_model()


class CreateUserView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes = (AllowAny,)


class ListUser(ListAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes = (AllowAny,)


class EnablePermissionView(UpdateAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes = (IsStaffPermission,)

    def patch(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        user = UserModel.objects.get(pk=pk)
        user.is_staff = True
        user.save()
        return super().patch(request, *args, **kwargs)


class DisablePermissionView(UpdateAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes = (IsStaffPermission,)

    def patch(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        user = UserModel.objects.get(pk=pk)
        user.is_staff = False
        user.save()
        return super().patch(request, *args, **kwargs)
