CREATE TABLE departments (
    department_id serial NOT NULL,
    department_name VARCHAR(15) NOT NULL,
    date_created date NOT NULL,

    PRIMARY KEY (department_id)
);

CREATE TABLE employees (
    employee_id serial,
    first_name VARCHAR(15) NOT NULL,
    last_name VARCHAR(15) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    department_id serial,
    date_created date NOT NULL,
    last_modified date NULL,

    PRIMARY KEY (employee_id),
    FOREIGN KEY(department_id) REFERENCES departments(department_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE events (
    event_id serial NOT NULL,
    employee_id serial NOT NULL,
    date_start date NOT NULL,
    date_end date NOT NULL,
    reason VARCHAR(250) NULL,
    date_created date NOT NULL,
    last_modified date NULL,

    PRIMARY KEY (event_id),
    FOREIGN KEY (employee_id) REFERENCES employees(employee_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE VIEW view_event_details AS 
	SELECT ev.event_id, emp.first_name, emp.last_name, ev.reason, ev.date_start, ev.date_end, d.department_id, d.department_name
	FROM employees emp
	JOIN events ev ON emp.employee_id = ev.employee_id
	JOIN departments d ON d.department_id = emp.department_id;

INSERT INTO departments
VALUES (default, 'data', NOW());

INSERT INTO employees
VALUES 
    (default, 'simon', 'bui', 'simonbui', 'simonbui', 1, NOW(), NOW()),
    (default, 'first1', 'last1', 'firstlast1@test.com', 'firstlast1', 1, NOW(), NOW());

INSERT INTO events
VALUES 
    (default, 1, '01-JAN-23', '02-JAN-23', 'vacation', NOW(), NOW()),
    (default, 2, '2023-08-20', '2023-08-29', 'beach', NOW(), NOW());