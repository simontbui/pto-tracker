namespace dotnet_backend.Services.Interfaces
{
    public interface IJwtService
    {
        public string GetJwtCookieValue(int employeeId);
        public bool ValidateJwtSecurityToken(string token);
    }
}
