package com.example.employeemanagement.config;

import com.example.employeemanagement.model.Department;
import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.repository.DepartmentRepository;
import com.example.employeemanagement.repository.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {

    private static final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    private final DepartmentRepository departmentRepository;
    private final EmployeeRepository employeeRepository;

    public DataInitializer(DepartmentRepository departmentRepository,
                           EmployeeRepository employeeRepository) {
        this.departmentRepository = departmentRepository;
        this.employeeRepository = employeeRepository;
    }

    @Override
    public void run(String... args) {
        if (departmentRepository.count() > 0) {
            return;
        }

        Department engineering = departmentRepository.save(new Department("Engineering"));
        Department hr = departmentRepository.save(new Department("Human Resources"));
        Department marketing = departmentRepository.save(new Department("Marketing"));
        Department finance = departmentRepository.save(new Department("Finance"));

        employeeRepository.save(createEmployee("Alice Johnson", "alice@company.com", engineering));
        employeeRepository.save(createEmployee("Bob Smith", "bob@company.com", engineering));
        employeeRepository.save(createEmployee("Charlie Brown", "charlie@company.com", engineering));
        employeeRepository.save(createEmployee("Diana Prince", "diana@company.com", hr));
        employeeRepository.save(createEmployee("Eve Adams", "eve@company.com", hr));
        employeeRepository.save(createEmployee("Frank Miller", "frank@company.com", marketing));
        employeeRepository.save(createEmployee("Grace Lee", "grace@company.com", marketing));
        employeeRepository.save(createEmployee("Henry Turner", "henry@company.com", finance));
        employeeRepository.save(createEmployee("Ivy Chen", "ivy@company.com", finance));
        employeeRepository.save(createEmployee("Jack Davis", "jack@external.com", engineering));

        log.info("Sample data initialized: {} departments, {} employees",
                departmentRepository.count(), employeeRepository.count());
    }

    private Employee createEmployee(String name, String email, Department department) {
        Employee emp = new Employee(name, email);
        emp.setDepartment(department);
        return emp;
    }
}
