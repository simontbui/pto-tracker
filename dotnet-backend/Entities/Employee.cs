using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace dotnet_backend.Entities;

public partial class Employee
{
    public int employee_id { get; set; }

    public string first_name { get; set; } = null!;

    public string last_name { get; set; } = null!;

    public string email { get; set; } = null!;

    public string password { get; set; } = null!;

    [ForeignKey("departments")]
    public int department_id { get; set; }

    //public virtual Department Department { get; set; } = null!;

    //public virtual ICollection<Event> Events { get; set; } = new List<Event>();
}
