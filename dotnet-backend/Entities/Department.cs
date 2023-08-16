using System;
using System.Collections.Generic;

namespace dotnet_backend.Entities;

public partial class Department
{
    public int department_id { get; set; }

    public string department_name { get; set; } = null!;

    //public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}
