using dotnet_backend.Data;
using dotnet_backend.Entities;
using dotnet_backend.Models;
using Microsoft.AspNetCore.CookiePolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using dotnet_backend.Services;

namespace dotnet_backend.Controllers
{
    public class LoginController : BaseApiController
    {
        private readonly PtoTrackerContext _context;
        private readonly IConfiguration _configuration;
        public LoginController(PtoTrackerContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost]
        public async Task<ActionResult<Dictionary<string, bool>>> Login(UserLoginModel userLoginModel)
        {
            string email = userLoginModel.Email;
            string password = userLoginModel.Password;
            Dictionary<string, bool> jsonResponse = new Dictionary<string, bool> { { "authenticated", true } };

            var employee = await _context.Employees
                .FirstOrDefaultAsync(x => x.email == email && x.password == password);

            if (employee == null)
            {
                jsonResponse["authenticated"] = false;
                return StatusCode(200, jsonResponse);
            }

            //Generate JWT and send it in cookie
            JwtService jwtService = new(_configuration["Jwt:Key"] ?? string.Empty);
            string cookieValue = jwtService.GetJwtCookieValue(employee.employee_id);
            CookieOptions cookieOptions = new() { HttpOnly = true };

            Response.Cookies.Append("access_token", cookieValue, cookieOptions);

            //Return response 
            return StatusCode(200, jsonResponse);
        }
    }
}
