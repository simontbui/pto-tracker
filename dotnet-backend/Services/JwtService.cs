using dotnet_backend.Data;
using dotnet_backend.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace dotnet_backend.Services
{
    public class JwtService : IJwtService
    {
        private readonly byte[] _key;

        public JwtService(string key)
        {
            _key = Encoding.ASCII.GetBytes(key);
        }

        public string GetJwtCookieValue(int employeeId)
        {
            string cookieValue = GetJwtSecurityToken(employeeId);
            return cookieValue;
        }

        private string GetJwtSecurityToken(int employeeId)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var securityKey = new SymmetricSecurityKey(_key);
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("employeeId", employeeId.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = signingCredentials
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }

        public bool ValidateJwtSecurityToken(string token)
        {
            if (token == string.Empty)
            {
                return false;
            }

            var tokenHandler = new JwtSecurityTokenHandler();

            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(_key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                var jwtToken = (JwtSecurityToken)validatedToken;
                var employeeId = int.Parse(jwtToken.Claims.First(x => x.Type == "employeeId").Value);

                // return true from JWT token if validation successful
                return true;
            }
            catch
            {
                // return false if validation fails
                return false;
            }
        }
    }
}
