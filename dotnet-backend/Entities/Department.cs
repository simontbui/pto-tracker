using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Entities
{
    [Table("departments")]
    public class Department
    {
        [Column("departmentid")]
        public int DepartmentId { get; set; }
        [Column("departmentname")]
        public string DepartmentName { get; set; } = string.Empty;
    }
}
