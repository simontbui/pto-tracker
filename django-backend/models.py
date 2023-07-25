# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Departments(models.Model):
    departmentid = models.AutoField(primary_key=True)
    departmentname = models.CharField(max_length=15)

    class Meta:
        managed = False
        db_table = 'departments'


class Employees(models.Model):
    employeeid = models.AutoField(primary_key=True)
    firstname = models.CharField(max_length=15)
    lastname = models.CharField(max_length=15)
    email = models.CharField(unique=True, max_length=255)
    password = models.CharField(max_length=50)
    departmentid = models.ForeignKey(Departments, models.DO_NOTHING, db_column='departmentid')

    class Meta:
        managed = False
        db_table = 'employees'


class Events(models.Model):
    eventid = models.AutoField(primary_key=True)
    employeeid = models.ForeignKey(Employees, models.DO_NOTHING, db_column='employeeid')
    datestart = models.DateTimeField()
    dateend = models.DateTimeField()
    reason = models.CharField(max_length=250, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'events'
