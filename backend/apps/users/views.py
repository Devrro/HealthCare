from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import CreateAPIView, ListAPIView, UpdateAPIView, get_object_or_404
from rest_framework.permissions import AllowAny

from core.permissions.user_permission import IsStaffPermission
from rest_framework.permissions import IsAuthenticated

from apps.users.serializers import UserSerializer, AvatarSerializer
from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
UserModel = get_user_model()


class CreateUserView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes = (AllowAny,)


class ListUser(ListAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes = (AllowAny,)


class GetUserById(ListAPIView):
    serializer_class = UserSerializer
    queryset = UserModel.objects.all()
    permission_classes = (AllowAny,)

    def get_queryset(self):
        q = self.queryset.filter(Q(id=self.kwargs.get('pk')))
        return q


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


class AddAvatarView(UpdateAPIView):
    serializer_class = AvatarSerializer
    permissions = (IsAuthenticated,)

    def get_object(self):
        return self.request.user.profile


class GetAvatarView(ListAPIView):
    queryset = UserModel.objects.all()
    serializer_class = AvatarSerializer
    permissions = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        user = get_object_or_404(self.queryset, pk=self.request.user.id)
        return Response({"picture": f"{user.profile.profile_picture}"})
