using System;
using System.Collections.Generic;
using dotnet_backend.Entities;
using Microsoft.EntityFrameworkCore;

namespace dotnet_backend.Data;

public partial class PtoTrackerContext : DbContext
{
    protected readonly IConfiguration _configuration;
    //public PtoTrackerContext(IConfiguration configuration)
    //{
    //    _configuration = configuration;
    //}

    public PtoTrackerContext(DbContextOptions<PtoTrackerContext> options, IConfiguration configuration)
        : base(options)
    {
        _configuration = configuration;
    }

    public virtual DbSet<Department> Departments { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Event> Events { get; set; }

    public virtual DbSet<ViewEventDetail> ViewEventDetails { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql(_configuration.GetConnectionString("PostgreSQL"));

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Department>(entity =>
        {
            entity.HasKey(e => e.department_id).HasName("departments_pkey");

            entity.ToTable("departments");

            entity.Property(e => e.department_id).HasColumnName("department_id");
            entity.Property(e => e.department_name)
                .HasMaxLength(15)
                .HasColumnName("department_name");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.employee_id).HasName("employees_pkey");

            entity.ToTable("employees");

            entity.HasIndex(e => e.email, "employees_email_key").IsUnique();

            entity.Property(e => e.employee_id).HasColumnName("employee_id");
            entity.Property(e => e.department_id)
                .ValueGeneratedOnAdd()
                .HasColumnName("department_id");
            entity.Property(e => e.email)
                .HasMaxLength(255)
                .HasColumnName("email");
            entity.Property(e => e.first_name)
                .HasMaxLength(15)
                .HasColumnName("first_name");
            entity.Property(e => e.last_name)
                .HasMaxLength(15)
                .HasColumnName("last_name");
            entity.Property(e => e.password)
                .HasMaxLength(50)
                .HasColumnName("password");

            //entity.HasOne(e => e.DepartmentId).WithMany(b => b.Employees)
            //    .HasForeignKey(entity=> entity.DepartmentId)
            //    .HasConstraintName("employees_department_id_fkey");

            //entity.HasOne(d => d.Department).WithMany(p => p.Employees)
            //    .HasForeignKey(d => d.DepartmentId)
            //    .HasConstraintName("employees_department_id_fkey");
        });

        modelBuilder.Entity<Event>(entity =>
        {
            entity.HasKey(e => e.event_id).HasName("events_pkey");

            entity.ToTable("events");

            entity.Property(e => e.event_id).HasColumnName("event_id");
            entity.Property(e => e.date_end).HasColumnName("date_end");
            entity.Property(e => e.date_start).HasColumnName("date_start");
            entity.Property(e => e.employee_id)
                .ValueGeneratedOnAdd()
                .HasColumnName("employee_id");
            entity.Property(e => e.reason)
                .HasMaxLength(250)
                .HasColumnName("reason");

            //entity.HasOne(d => d.Employee).WithMany(p => p.Events)
            //    .HasForeignKey(d => d.EmployeeId)
            //    .HasConstraintName("events_employee_id_fkey");
        });

        modelBuilder.Entity<ViewEventDetail>(entity =>
        {
            entity
                .HasNoKey()
                .ToView("view_event_details");

            entity.Property(e => e.date_end).HasColumnName("date_end");
            entity.Property(e => e.date_start).HasColumnName("date_start");
            entity.Property(e => e.department_id).HasColumnName("department_id");
            entity.Property(e => e.event_id).HasColumnName("event_id");
            entity.Property(e => e.first_name)
                .HasMaxLength(15)
                .HasColumnName("first_name");
            entity.Property(e => e.last_name)
                .HasMaxLength(15)
                .HasColumnName("last_name");
            entity.Property(e => e.reason)
                .HasMaxLength(250)
                .HasColumnName("reason");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
