package com.example.employeemanagement.controller;

import com.example.employeemanagement.dto.EmployeeDTO;
import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.projection.EmployeeView;
import com.example.employeemanagement.service.EmployeeService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    // Exercise 4: CRUD endpoints
    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody Employee employee) {
        return new ResponseEntity<>(employeeService.create(employee), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> get(@PathVariable Long id) {
        return ResponseEntity.ok(employeeService.get(id));
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAll() {
        return ResponseEntity.ok(employeeService.getAll());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> update(@PathVariable Long id, @RequestBody Employee employee) {
        return ResponseEntity.ok(employeeService.update(id, employee));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        employeeService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // Exercise 5: Custom query endpoints
    @GetMapping("/search/by-name")
    public ResponseEntity<List<Employee>> findByName(@RequestParam String name) {
        return ResponseEntity.ok(employeeService.findByName(name));
    }

    @GetMapping("/search/by-name-containing")
    public ResponseEntity<List<Employee>> findByNameContaining(@RequestParam String name) {
        return ResponseEntity.ok(employeeService.findByNameContaining(name));
    }

    @GetMapping("/search/by-email")
    public ResponseEntity<List<Employee>> findByEmail(@RequestParam String email) {
        return ResponseEntity.ok(employeeService.findByEmail(email));
    }

    @GetMapping("/search/by-department-id")
    public ResponseEntity<List<Employee>> findByDepartmentId(@RequestParam Long deptId) {
        return ResponseEntity.ok(employeeService.findByDepartmentId(deptId));
    }

    @GetMapping("/search/by-email-domain")
    public ResponseEntity<List<Employee>> findByEmailDomain(@RequestParam String domain) {
        return ResponseEntity.ok(employeeService.findByEmailDomain(domain));
    }

    // Exercise 6: Pagination + Sorting endpoints
    @GetMapping("/paged")
    public ResponseEntity<Page<Employee>> findAllPaged(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String direction) {
        Sort sort = direction.equalsIgnoreCase("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return ResponseEntity.ok(employeeService.findAll(pageable));
    }

    @GetMapping("/paged/by-department")
    public ResponseEntity<Page<Employee>> findByDepartmentPaged(
            @RequestParam String departmentName,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String direction) {
        Sort sort = direction.equalsIgnoreCase("desc") ? Sort.by(sortBy).descending() : Sort.by(sortBy).ascending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return ResponseEntity.ok(employeeService.findByDepartmentName(departmentName, pageable));
    }

    // Exercise 8: Projection endpoints
    @GetMapping("/views/by-department")
    public ResponseEntity<List<EmployeeView>> getViewsByDepartment(@RequestParam Long deptId) {
        return ResponseEntity.ok(employeeService.getEmployeeViewsByDepartment(deptId));
    }

    @GetMapping("/views")
    public ResponseEntity<List<EmployeeView>> getAllViews() {
        return ResponseEntity.ok(employeeService.getAllEmployeeViews());
    }

    @GetMapping("/dtos/by-department")
    public ResponseEntity<List<EmployeeDTO>> getDTOsByDepartment(@RequestParam Long deptId) {
        return ResponseEntity.ok(employeeService.getEmployeeDTOsByDepartment(deptId));
    }

    @GetMapping("/dtos")
    public ResponseEntity<List<EmployeeDTO>> getAllDTOs() {
        return ResponseEntity.ok(employeeService.getAllEmployeeDTOs());
    }
}
