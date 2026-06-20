public class EmployeeTest {
    public static void main(String[] args) {
        EmployeeManager mgr = new EmployeeManager();

        mgr.addEmployee(new Employee(101, "Shreyansh Pandit", "Software Engineer", 75000));
        mgr.addEmployee(new Employee(102, "Alice", "Manager", 90000));
        mgr.addEmployee(new Employee(103, "Bob", "Analyst", 60000));

        System.out.println("\n--- All Employees ---");
        mgr.traverseEmployees();

        System.out.println("\n--- Searching for Employee 102 ---");
        Employee emp = mgr.searchEmployee(102);
        if (emp != null) {
            System.out.println("Found: " + emp);
        } else {
            System.out.println("Not found.");
        }

        System.out.println("\n--- Deleting Employee 101 ---");
        mgr.deleteEmployee(101);

        System.out.println("\n--- Employees After Deletion ---");
        mgr.traverseEmployees();
    }
}
