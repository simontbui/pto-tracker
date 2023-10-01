using dotnet_backend.Models;
using dotnet_backend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace dotnet_backend.Controllers
{
    [Route("api/verify-auth")]
    public class VerifyAuthController : Controller
    {
        private readonly IConfiguration _configuration;

        public VerifyAuthController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost]
        public ActionResult<Dictionary<string, bool>> Verify()
        {
            string token = Request.Cookies["access_token"] ?? string.Empty;
            Dictionary<string, bool> jsonResponse = new() { { "authenticated", false } };

            if (token == string.Empty)
            {
                return StatusCode(200, jsonResponse);
            }

            JwtService jwtService = new JwtService(_configuration["Jwt:Key"] ?? string.Empty);

            bool isValidToken = jwtService.ValidateJwtSecurityToken(token);
            if (isValidToken)
            {
                jsonResponse["authenticated"] = true;
            }

            return StatusCode(200, jsonResponse);
        }
    }
}
