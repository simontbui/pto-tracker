using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Entities;
using dotnet_backend.Data;
using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Controllers
{
    public class EmployeesController : BaseApiController
    {
        private readonly PtoTrackerContext _context;

        public EmployeesController(PtoTrackerContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetAllEmployees()
        {
            return await _context.Employees
                .ToListAsync();
        }
    }
}
