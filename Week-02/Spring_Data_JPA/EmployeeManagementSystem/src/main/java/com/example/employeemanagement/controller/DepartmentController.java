package com.example.employeemanagement.controller;

import com.example.employeemanagement.dto.DepartmentDTO;
import com.example.employeemanagement.model.Department;
import com.example.employeemanagement.service.DepartmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private final DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    // Exercise 4: CRUD endpoints
    @PostMapping
    public ResponseEntity<Department> create(@RequestBody Department department) {
        return new ResponseEntity<>(departmentService.create(department), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Department> get(@PathVariable Long id) {
        return ResponseEntity.ok(departmentService.get(id));
    }

    @GetMapping
    public ResponseEntity<List<Department>> getAll() {
        return ResponseEntity.ok(departmentService.getAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Department> update(@PathVariable Long id, @RequestBody Department department) {
        return ResponseEntity.ok(departmentService.update(id, department));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        departmentService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // Custom query endpoints
    @GetMapping("/search/by-name")
    public ResponseEntity<List<Department>> findByName(@RequestParam String name) {
        return ResponseEntity.ok(departmentService.findByName(name));
    }

    @GetMapping("/{id}/with-employees")
    public ResponseEntity<Department> findByIdWithEmployees(@PathVariable Long id) {
        return ResponseEntity.ok(departmentService.findByIdWithEmployees(id));
    }

    // Exercise 8: Projection endpoint
    @GetMapping("/with-counts")
    public ResponseEntity<List<DepartmentDTO>> getAllWithEmployeeCounts() {
        return ResponseEntity.ok(departmentService.getAllWithEmployeeCount());
    }
}
