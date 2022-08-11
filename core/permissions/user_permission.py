from rest_framework.permissions import BasePermission


class IsStaffPermission(BasePermission):

    def has_permission(self, request, view):
        return bool(request.user and request.user.is_staff)
