using dotnet_backend.Entities;
using Microsoft.EntityFrameworkCore;
using Npgsql.NameTranslation;

namespace dotnet_backend.Data
{
    public class PtoContext : DbContext
    {
        protected readonly IConfiguration _configuration;
        public PtoContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<Department> Departments { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Event> Events { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //connectionstring from appsettings.json
            optionsBuilder
                .UseNpgsql(_configuration.GetConnectionString("PostgreSQL"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
