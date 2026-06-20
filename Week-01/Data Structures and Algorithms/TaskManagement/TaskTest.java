public class TaskTest {
    public static void main(String[] args) {
        TaskLinkedList list = new TaskLinkedList();

        list.addTask(new Task(1, "Design database", "Pending"));
        list.addTask(new Task(2, "Implement login", "In Progress"));
        list.addTask(new Task(3, "Write tests", "Pending"));

        System.out.println("\n--- All Tasks ---");
        list.traverseTasks();

        System.out.println("\n--- Searching for Task 2 ---");
        Task t = list.searchTask(2);
        if (t != null) {
            System.out.println("Found: " + t);
        } else {
            System.out.println("Not found.");
        }

        System.out.println("\n--- Deleting Task 1 ---");
        list.deleteTask(1);

        System.out.println("\n--- Tasks After Deletion ---");
        list.traverseTasks();
    }
}
