using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Entities;

public partial class Event
{
    public int event_id { get; set; }

    [ForeignKey("employees")]
    public int employee_id { get; set; }

    public DateOnly date_start { get; set; }

    public DateOnly date_end { get; set; }

    public string? reason { get; set; }

    //public virtual Employee Employee { get; set; } = null!;
}
