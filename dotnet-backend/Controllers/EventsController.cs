﻿using dotnet_backend.Data;
using dotnet_backend.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Controllers
{
    public class EventsController : BaseApiController
    {
        private readonly PtoTrackerContext _context;
        public EventsController(PtoTrackerContext context)
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
