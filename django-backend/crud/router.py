from api.viewsets import View_Event_Details, DepartmentsViewset, EmployeesViewset, EventsViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('event-details', View_Event_Details)
router.register('employees', EmployeesViewset)
router.register('departments', DepartmentsViewset)
router.register('events', EventsViewset)
