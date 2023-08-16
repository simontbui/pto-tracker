using dotnet_backend.Data;
using dotnet_backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        public async Task<ActionResult<List<ViewEventDetail>>> GetAllEmployees()
        {
            return await _context.ViewEventDetails
                .ToListAsync();
        }
    }
}
