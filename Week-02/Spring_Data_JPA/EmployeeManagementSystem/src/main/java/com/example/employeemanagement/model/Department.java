package com.example.employeemanagement.model;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "departments")
@NamedQueries({
    @NamedQuery(name = "Department.findByName",
                query = "SELECT d FROM Department d WHERE d.name = :name"),
    @NamedQuery(name = "Department.findByNameContaining",
                query = "SELECT d FROM Department d WHERE d.name LIKE CONCAT('%', :name, '%')")
})
public class Department extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @OneToMany(mappedBy = "department", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Employee> employees;

    public Department() {
    }

    public Department(String name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(Set<Employee> employees) {
        this.employees = employees;
    }
}
