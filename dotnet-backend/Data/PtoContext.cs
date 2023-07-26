using dotnet_backend.Entities;
using Microsoft.EntityFrameworkCore;

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

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(_configuration.GetConnectionString("PostgreSQL"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Department>()
                .HasKey(d => d.DepartmentId);
        }
    }
}
