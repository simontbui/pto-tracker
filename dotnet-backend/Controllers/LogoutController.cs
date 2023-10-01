using dotnet_backend.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Controllers
{
    [Route("api/logout")]
    public class LogoutController : Controller
    {
        private readonly IConfiguration _configuration;
        public LogoutController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public ActionResult<Dictionary<string, string>> RemoveJwt()
        {
            Response.Cookies.Append("access_token", "", new CookieOptions()
            {
                Expires = DateTime.Now.AddDays(-1),
                HttpOnly = true
            });

            Dictionary<string, string> jsonResponse = new()
            { 
                { "Response", "JWT cleared..." } 
            };

            return StatusCode(202, jsonResponse);
        }
    }
}
