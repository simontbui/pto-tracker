from api.viewsets import DepartmentsViewset, EmployeesViewset, EventsViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('employees', EmployeesViewset)
router.register('departments', DepartmentsViewset)
router.register('events', EventsViewset)
