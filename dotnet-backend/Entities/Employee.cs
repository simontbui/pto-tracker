using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Entities
{
    [Table("employees")]
    public class Employee
    {
        [Key]
        public int employee_id { get; set; }
        public string first_name { get; set; } = string.Empty;
        public string last_name { get; set;} = string.Empty;
        public string email { get; set; } = string.Empty;
        public string password { get; set; } = string.Empty;
        [ForeignKey("departments")]
        public int department_id { get; set; }
    }
}
