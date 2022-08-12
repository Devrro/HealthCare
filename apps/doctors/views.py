from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import AllowAny

from apps.doctors.models import DoctorModel
from apps.doctors.serializers import DoctorSerializer


class DoctorListCreateView(ListCreateAPIView):
    queryset = DoctorModel.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        print(self.request)
        return super().get(request, *args, **kwargs)
