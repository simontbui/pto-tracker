using System;
using System.Collections.Generic;

namespace dotnet_backend.Entities;

public partial class ViewEventDetail
{
    public int? event_id { get; set; }

    public string? first_name { get; set; }

    public string? last_name { get; set; }

    public string? reason { get; set; }

    public DateOnly? date_start { get; set; }

    public DateOnly? date_end { get; set; }

    public int? department_id { get; set; }
}
