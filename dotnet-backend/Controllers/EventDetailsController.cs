using dotnet_backend.Data;
using dotnet_backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FromUri = System.Web.Http.FromUriAttribute;

namespace dotnet_backend.Controllers
{
    [Route("api/event-details")]
    public class EventDetailsController : Controller
    {
        private readonly PtoTrackerContext _context;
        public EventDetailsController(PtoTrackerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<ViewEventDetail>> GetAllEmployees([FromUri] string lastName, [FromUri] string firstName, [FromUri] string departmentName)
        {
            Console.WriteLine("======DEPT NAME========");
            Console.WriteLine(departmentName);

            Console.WriteLine("======FIRST NAME========");
            Console.WriteLine(firstName);

            var results = _context.ViewEventDetails.AsQueryable();

            if (lastName != null)
                results = results.Where(x => x.last_name == lastName);

            if (firstName != null)
                results = results.Where(x => x.first_name == firstName);

            if (departmentName != null)
                results = results.Where(x => x.department_name == departmentName);

            return results.ToList();
        }
    }
}
