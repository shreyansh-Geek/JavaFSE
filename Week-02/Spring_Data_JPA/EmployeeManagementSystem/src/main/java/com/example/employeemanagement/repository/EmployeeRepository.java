package com.example.employeemanagement.repository;

import com.example.employeemanagement.model.Employee;
import com.example.employeemanagement.projection.EmployeeView;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    // Exercise 3: Derived query methods
    List<Employee> findByName(String name);

    List<Employee> findByNameContainingIgnoreCase(String name);

    List<Employee> findByEmail(String email);

    List<Employee> findByDepartmentName(String departmentName);

    List<Employee> findByNameContainingOrderByNameAsc(String name);

    // Exercise 5: Custom @Query methods
    @Query("SELECT e FROM Employee e WHERE e.department.id = :deptId")
    List<Employee> findByDepartmentId(@Param("deptId") Long departmentId);

    @Query("SELECT e FROM Employee e WHERE e.email LIKE %:domain")
    List<Employee> findByEmailDomain(@Param("domain") String domain);

    // Named query (defined on entity)
    List<Employee> findByEmail(@Param("email") String email,
                               org.springframework.data.domain.Pageable pageable);

    // Exercise 6: Pagination - derived + Pageable
    Page<Employee> findByDepartmentName(String departmentName, Pageable pageable);

    Page<Employee> findByNameContaining(String name, Pageable pageable);

    // Exercise 8: Interface-based projection
    @Query("SELECT e.name AS name, e.email AS email FROM Employee e WHERE e.department.id = :deptId")
    List<EmployeeView> findEmployeeViewsByDepartment(@Param("deptId") Long deptId);

    @Query("SELECT e.name AS name, e.email AS email FROM Employee e")
    List<EmployeeView> findAllEmployeeViews();

    // Exercise 8: Class-based projection via constructor expression
    @Query("SELECT new com.example.employeemanagement.dto.EmployeeDTO(e.id, e.name, e.email, d.name) "
         + "FROM Employee e JOIN e.department d WHERE d.id = :deptId")
    List<com.example.employeemanagement.dto.EmployeeDTO> findEmployeeDTOsByDepartment(@Param("deptId") Long deptId);

    @Query("SELECT new com.example.employeemanagement.dto.EmployeeDTO(e.id, e.name, e.email, d.name) "
         + "FROM Employee e JOIN e.department d")
    List<com.example.employeemanagement.dto.EmployeeDTO> findAllEmployeeDTOs();

    // Exercise 10: Batch processing support method
    @Query("SELECT e FROM Employee e JOIN FETCH e.department")
    List<Employee> findAllWithDepartment();
}
