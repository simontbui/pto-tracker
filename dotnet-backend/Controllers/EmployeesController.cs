using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Entities;
using dotnet_backend.Data;
using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeesController : Controller
    {
        private readonly PtoContext _context;

        public EmployeesController(PtoContext context)
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
