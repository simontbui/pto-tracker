using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Entities
{
    [Table("events")]
    public class Event
    {
        [Column("eventid")]
        public int EventId { get; set; }

        [Column("datestart")]
        public DateOnly DateStart { get; set; }

        [Column("dateend")]
        public DateOnly DateEnd { get; set; }

        [Column("reason")]
        public string Reason { get; set; } = string.Empty;

        [Column("employeeid")]
        [ForeignKey("employees")]
        public int EmployeeId { get; set; }
    }
}
