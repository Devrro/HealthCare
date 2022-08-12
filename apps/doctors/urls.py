from django.urls import path

from apps.doctors.views import DoctorListCreateView

urlpatterns = [
    path('/doctors', DoctorListCreateView.as_view())
]