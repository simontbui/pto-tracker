from rest_framework import serializers
from .models import Departments, Employees, Events, View_Event_Details

class View_Event_Details_Serializer(serializers.ModelSerializer):
    class Meta:
        model = View_Event_Details
        fields = "__all__"
class DepartmentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = "__all__"

class EmployeesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employees
        fields = "__all__"

class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = "__all__"