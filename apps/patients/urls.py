from django.urls import path

from apps.patients.views import AllPatientsView

urlpatterns = [
    path('/patients', AllPatientsView.as_view())
]
