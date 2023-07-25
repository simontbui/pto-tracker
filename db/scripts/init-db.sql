CREATE TABLE departments (
    departmentID serial NOT NULL,
    departmentname VARCHAR(15) NOT NULL,

    PRIMARY KEY (departmentID)
);

CREATE TABLE employees (
    employeeID serial,
    firstname VARCHAR(15) NOT NULL,
    lastname VARCHAR(15) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    departmentID serial,

    PRIMARY KEY (employeeID),
    FOREIGN KEY(departmentID) REFERENCES departments(departmentID) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE events (
    eventID serial NOT NULL,
    employeeID serial NOT NULL,
    datestart date NOT NULL,
    dateend date NOT NULL,
    reason VARCHAR(250) NULL,

    PRIMARY KEY (eventID),
    FOREIGN KEY (employeeID) REFERENCES employees(employeeID) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO departments
VALUES (default, 'data2');

insert into employees
values (default, 'simon', 'bui', 'simonbui', 'simonbui', 1);

insert into events
values (default, 1, '01-JAN-23', '02-JAN-23', 'vacation');