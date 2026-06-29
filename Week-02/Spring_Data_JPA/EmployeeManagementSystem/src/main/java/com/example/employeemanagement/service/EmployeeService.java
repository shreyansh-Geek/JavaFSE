package com.example.employeemanagement.service;

import com.example.employeemanagement.dto.EmployeeDTO;
import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.projection.EmployeeView;
import com.example.employeemanagement.repository.EmployeeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    // Exercise 4: Basic CRUD
    public Employee create(Employee employee) {
        return employeeRepository.save(employee);
    }

    public Employee get(Long id) {
        return employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found: " + id));
    }

    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }

    public Employee update(Long id, Employee updated) {
        Employee existing = get(id);
        existing.setName(updated.getName());
        existing.setEmail(updated.getEmail());
        existing.setDepartment(updated.getDepartment());
        return employeeRepository.save(existing);
    }

    public void delete(Long id) {
        employeeRepository.deleteById(id);
    }

    // Derived queries
    public List<Employee> findByName(String name) {
        return employeeRepository.findByName(name);
    }

    public List<Employee> findByNameContaining(String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Employee> findByEmail(String email) {
        return employeeRepository.findByEmail(email);
    }

    // Custom @Query
    public List<Employee> findByDepartmentId(Long deptId) {
        return employeeRepository.findByDepartmentId(deptId);
    }

    public List<Employee> findByEmailDomain(String domain) {
        return employeeRepository.findByEmailDomain(domain);
    }

    // Exercise 6: Pagination + Sorting
    public Page<Employee> findByDepartmentName(String deptName, Pageable pageable) {
        return employeeRepository.findByDepartmentName(deptName, pageable);
    }

    public Page<Employee> findByNameContaining(String name, Pageable pageable) {
        return employeeRepository.findByNameContaining(name, pageable);
    }

    public Page<Employee> findAll(Pageable pageable) {
        return employeeRepository.findAll(pageable);
    }

    // Exercise 8: Projections
    public List<EmployeeView> getEmployeeViewsByDepartment(Long deptId) {
        return employeeRepository.findEmployeeViewsByDepartment(deptId);
    }

    public List<EmployeeView> getAllEmployeeViews() {
        return employeeRepository.findAllEmployeeViews();
    }

    public List<EmployeeDTO> getEmployeeDTOsByDepartment(Long deptId) {
        return employeeRepository.findEmployeeDTOsByDepartment(deptId);
    }

    public List<EmployeeDTO> getAllEmployeeDTOs() {
        return employeeRepository.findAllEmployeeDTOs();
    }

    // Exercise 10: Batch processing
    public List<Employee> batchSave(List<Employee> employees) {
        return employeeRepository.saveAll(employees);
    }

    public List<Employee> getAllWithDepartment() {
        return employeeRepository.findAllWithDepartment();
    }
}
