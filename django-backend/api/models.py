from django.db import models

class Departments(models.Model):
    departmentid = models.AutoField(primary_key=True)
    departmentname = models.CharField(max_length=15)

    class Meta:
        db_table = "departments"

class Employees(models.Model):
    employeeid = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=15)
    lastname = models.CharField(max_length=15)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=50)
    departmentid = models.ForeignKey(Departments, on_delete=models.CASCADE, db_column="departmentid")

    class Meta:
        db_table = "employees"

class Events(models.Model):
    eventid = models.AutoField(primary_key=True)
    employeeid = models.ForeignKey(Employees, db_column="employeeid", on_delete=models.CASCADE)
    datestart = models.DateField()
    dateend = models.DateField()
    reason = models.CharField(max_length=250)

    class Meta:
        db_table = "events"