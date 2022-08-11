from django.urls import path

from apps.patient.views import PatientListCreateView

urlpatterns = [
    path('', PatientListCreateView.as_view())
]
