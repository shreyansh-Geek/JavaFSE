public class MVCPatternTest {
    public static void main(String[] args) {
        Student student = new Student("Shreyansh Pandit", 1001, "A");
        StudentView view = new StudentView();
        StudentController controller = new StudentController(student, view);

        controller.updateView();

        controller.setStudentName("Shreyansh Pandit");
        controller.setStudentGrade("A+");

        controller.updateView();
    }
}
