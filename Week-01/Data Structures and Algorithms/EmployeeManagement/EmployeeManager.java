import java.util.Arrays;

public class EmployeeManager {
    private Employee[] employees;
    private int size;
    private static final int INITIAL_CAPACITY = 10;

    public EmployeeManager() {
        employees = new Employee[INITIAL_CAPACITY];
        size = 0;
    }

    public void addEmployee(Employee emp) {
        if (size == employees.length) {
            employees = Arrays.copyOf(employees, employees.length * 2);
        }
        employees[size] = emp;
        size++;
        System.out.println("Added: " + emp);
    }

    public Employee searchEmployee(int employeeId) {
        for (int i = 0; i < size; i++) {
            if (employees[i].getEmployeeId() == employeeId) {
                return employees[i];
            }
        }
        return null;
    }

    public void traverseEmployees() {
        if (size == 0) {
            System.out.println("No employees to display.");
            return;
        }
        for (int i = 0; i < size; i++) {
            System.out.println(employees[i]);
        }
    }

    public boolean deleteEmployee(int employeeId) {
        for (int i = 0; i < size; i++) {
            if (employees[i].getEmployeeId() == employeeId) {
                employees[i] = employees[size - 1];
                employees[size - 1] = null;
                size--;
                System.out.println("Deleted employee with ID " + employeeId);
                return true;
            }
        }
        System.out.println("Employee with ID " + employeeId + " not found.");
        return false;
    }
}
