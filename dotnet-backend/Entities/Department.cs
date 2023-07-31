using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace dotnet_backend.Entities
{
    [Table("departments")]
    public class Department
    {
        [Key]
        public int department_id { get; set; }
        public string department_name { get; set; } = string.Empty;
    }
}