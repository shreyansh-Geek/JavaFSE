CREATE OR REPLACE PACKAGE EmployeeManagement IS
    PROCEDURE HireEmployee(
        p_employee_id NUMBER,
        p_name VARCHAR2,
        p_position VARCHAR2,
        p_salary NUMBER,
        p_department VARCHAR2
    );
    
    PROCEDURE UpdateEmployeeDetails(
        p_employee_id NUMBER,
        p_name VARCHAR2,
        p_position VARCHAR2,
        p_salary NUMBER
    );
    
    FUNCTION CalculateAnnualSalary(
        p_employee_id NUMBER
    ) RETURN NUMBER;
END EmployeeManagement;
/

CREATE OR REPLACE PACKAGE BODY EmployeeManagement IS
    
    PROCEDURE HireEmployee(
        p_employee_id NUMBER,
        p_name VARCHAR2,
        p_position VARCHAR2,
        p_salary NUMBER,
        p_department VARCHAR2
    ) IS
    BEGIN
        INSERT INTO Employees (EmployeeID, Name, Position, Salary, Department, HireDate)
        VALUES (p_employee_id, p_name, p_position, p_salary, p_department, SYSDATE);
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Employee ' || p_name || ' hired.');
    END HireEmployee;
    
    PROCEDURE UpdateEmployeeDetails(
        p_employee_id NUMBER,
        p_name VARCHAR2,
        p_position VARCHAR2,
        p_salary NUMBER
    ) IS
    BEGIN
        UPDATE Employees
        SET Name = p_name, Position = p_position, Salary = p_salary
        WHERE EmployeeID = p_employee_id;
        COMMIT;
        DBMS_OUTPUT.PUT_LINE('Employee ' || p_employee_id || ' details updated.');
    END UpdateEmployeeDetails;
    
    FUNCTION CalculateAnnualSalary(
        p_employee_id NUMBER
    ) RETURN NUMBER IS
        v_salary NUMBER;
    BEGIN
        SELECT Salary INTO v_salary
        FROM Employees
        WHERE EmployeeID = p_employee_id;
        RETURN v_salary * 12;
    EXCEPTION
        WHEN NO_DATA_FOUND THEN
            RETURN NULL;
    END CalculateAnnualSalary;
    
END EmployeeManagement;
/
