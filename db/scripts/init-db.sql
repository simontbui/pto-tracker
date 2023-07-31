CREATE TABLE departments (
    department_id serial NOT NULL,
    department_name VARCHAR(15) NOT NULL,

    PRIMARY KEY (department_id)
);

CREATE TABLE employees (
    employee_id serial,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    department_id serial,

    PRIMARY KEY (employee_id),
    FOREIGN KEY(department_id) REFERENCES departments(department_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE events (
    event_id serial NOT NULL,
    employee_id serial NOT NULL,
    date_start date NOT NULL,
    date_end date NOT NULL,
    reason VARCHAR(250) NULL,

    PRIMARY KEY (event_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO departments
VALUES (default, 'data');

insert into employees
values (default, 'simon', 'bui', 'simonbui', 'simonbui', 1);

insert into events
values (default, 1, '01-JAN-23', '02-JAN-23', 'vacation');