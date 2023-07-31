using dotnet_backend.Data;
using dotnet_backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventsController : Controller
    {
        private readonly PtoContext _context;
        public EventsController(PtoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Event>>> GetAllEvents()
        {
            return await _context.Events
                .ToListAsync();
        }
    }
}
