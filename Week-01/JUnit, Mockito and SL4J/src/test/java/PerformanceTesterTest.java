import static org.junit.Assert.*;
import org.junit.Test;

public class PerformanceTesterTest {

    @Test(timeout = 500)
    public void testPerformTaskWithinTimeout() {
        PerformanceTester tester = new PerformanceTester();
        String result = tester.performTask();
        assertEquals("Task completed", result);
    }
}
