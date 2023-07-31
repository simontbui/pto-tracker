using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Entities
{
    [Table("employees")]
    public class Employee
    {
        [Column("employeeid")]
        public int EmployeeId { get; set; }

        [Column("firstname")]
        public string FirstName { get; set; } = string.Empty;

        [Column("lastname")]
        public string LastName { get; set;} = string.Empty;

        [Column("email")]
        public string Email { get; set; } = string.Empty;

        [Column("password")]
        public string Password { get; set; } = string.Empty;

        [Column("departmentid")]
        [ForeignKey("departments")]
        public int DepartmentId { get; set; }
    }
}
