using dotnet_backend.Data;
using dotnet_backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Controllers
{
    public class EventDetailsController : BaseApiController
    {
        private readonly PtoContext _context;
        public EventDetailsController(PtoContext context)
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
