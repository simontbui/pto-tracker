from rest_framework import viewsets
from . import models
from . import serializers

class DepartmentsViewset(viewsets.ModelViewSet):
    queryset = models.Departments.objects.all()
    serializer_class = serializers.DepartmentsSerializer

class EmployeesViewset(viewsets.ModelViewSet):
    queryset = models.Employees.objects.all()
    serializer_class = serializers.EmployeesSerializer

class EventsViewset(viewsets.ModelViewSet):
    queryset = models.Events.objects.all()
    serializer_class = serializers.EventsSerializer