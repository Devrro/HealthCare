
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import BasePermission

from apps.doctors.models import DoctorModel


class IsStaffPermission(BasePermission):

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff)


class IsDoctorPermission(BasePermission):

    def has_permission(self, request, view):
        user = get_object_or_404(DoctorModel.objects.all(), pk=request.user.id)
        return bool(user)
