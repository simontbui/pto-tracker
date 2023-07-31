using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Entities
{
    [Table("events")]
    public class Event
    {
        [Key]
        public int event_id { get; set; }
        public DateOnly date_start { get; set; }
        public DateOnly date_end { get; set; }
        public string reason { get; set; } = string.Empty;

        [ForeignKey("employees")]
        public int employee_id { get; set; }
    }
}
