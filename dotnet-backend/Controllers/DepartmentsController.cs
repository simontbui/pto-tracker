using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using dotnet_backend.Entities;
using dotnet_backend.Data;
using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DepartmentsController : Controller
    {
        private readonly PtoContext _context;

        public DepartmentsController(PtoContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Department>>> GetAllDepartments()
        {
            return await _context.Departments
                .ToListAsync();
        }
    }
}
