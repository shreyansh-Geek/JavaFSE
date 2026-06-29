package com.example.employeemanagement.dto;

// Exercise 8: Class-based projection (used with @Query constructor expression)
public class DepartmentDTO {

    private Long id;
    private String name;
    private Long employeeCount;

    public DepartmentDTO(Long id, String name, Long employeeCount) {
        this.id = id;
        this.name = name;
        this.employeeCount = employeeCount;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getEmployeeCount() {
        return employeeCount;
    }
}
