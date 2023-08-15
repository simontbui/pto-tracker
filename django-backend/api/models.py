from django.db import models

class View_Event_Details(models.Model):
    event_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    reason = models.CharField(max_length=250)
    date_start = models.DateField()
    date_end = models.DateField()

    class Meta:
        db_table = "view_event_details"
    
class Departments(models.Model):
    department_id = models.AutoField(primary_key=True)
    department_name = models.CharField(max_length=15)

    class Meta:
        db_table = "departments"

class Employees(models.Model):
    employee_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=15)
    last_name = models.CharField(max_length=15)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=50)
    department_id = models.ForeignKey(Departments, on_delete=models.CASCADE, db_column="department_id")

    class Meta:
        db_table = "employees"

class Events(models.Model):
    event_id = models.AutoField(primary_key=True)
    employee_id = models.ForeignKey(Employees, db_column="employee_id", on_delete=models.CASCADE)
    date_start = models.DateField()
    date_end = models.DateField()
    reason = models.CharField(max_length=250)

    class Meta:
        db_table = "events"