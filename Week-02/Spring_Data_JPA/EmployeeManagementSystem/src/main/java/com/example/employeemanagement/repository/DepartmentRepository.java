package com.example.employeemanagement.repository;

import com.example.employeemanagement.model.Department;
import com.example.employeemanagement.projection.DepartmentSummary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {

    // Exercise 3: Derived query methods
    List<Department> findByName(String name);

    List<Department> findByNameContainingIgnoreCase(String name);

    // Exercise 5: Custom @Query
    @Query("SELECT d FROM Department d LEFT JOIN FETCH d.employees WHERE d.id = :id")
    Department findByIdWithEmployees(@Param("id") Long id);

    // Exercise 8: Class-based projection via constructor expression
    @Query("SELECT new com.example.employeemanagement.dto.DepartmentDTO(d.id, d.name, COUNT(e)) "
         + "FROM Department d LEFT JOIN d.employees e GROUP BY d.id, d.name")
    List<com.example.employeemanagement.dto.DepartmentDTO> findAllWithEmployeeCount();
}
