package com.example.employeemanagement.service;

import com.example.employeemanagement.dto.DepartmentDTO;
import com.example.employeemanagement.model.Department;
import com.example.employeemanagement.repository.DepartmentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class DepartmentService {

    private final DepartmentRepository departmentRepository;

    public DepartmentService(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    // Exercise 4: Basic CRUD
    public Department create(Department department) {
        return departmentRepository.save(department);
    }

    public Department get(Long id) {
        return departmentRepository.findById(id).orElseThrow(() -> new RuntimeException("Department not found: " + id));
    }

    public List<Department> getAll() {
        return departmentRepository.findAll();
    }

    public Department update(Long id, Department updated) {
        Department existing = get(id);
        existing.setName(updated.getName());
        return departmentRepository.save(existing);
    }

    public void delete(Long id) {
        departmentRepository.deleteById(id);
    }

    // Derived queries
    public List<Department> findByName(String name) {
        return departmentRepository.findByName(name);
    }

    // Custom @Query
    public Department findByIdWithEmployees(Long id) {
        return departmentRepository.findByIdWithEmployees(id);
    }

    // Exercise 8: Projections
    public List<DepartmentDTO> getAllWithEmployeeCount() {
        return departmentRepository.findAllWithEmployeeCount();
    }
}
