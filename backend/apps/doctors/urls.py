from django.urls import path

from apps.doctors.views import (
    AddPatientsToDoctor,
    AddToDoctorsView,
    DeleteFromDoctorsView,
    DoctorAndPatientsListView,
    DoctorListIdView,
    DoctorsListView,
    DoctorsByIdListView,
)

urlpatterns = [
    path('/doctors', DoctorsListView.as_view()),
    path('/doctors/<int:pk>', DoctorsByIdListView.as_view()),
    path('/doctors_with_id', DoctorListIdView.as_view()),
    path('/doctors_and_patients', DoctorAndPatientsListView.as_view()),
    path('/add_to_doctors', AddToDoctorsView.as_view()),
    path('/delete_from_doctors/<int:pk>', DeleteFromDoctorsView.as_view()),
    path('/add_patient_to_doctor', AddPatientsToDoctor.as_view()),
]
