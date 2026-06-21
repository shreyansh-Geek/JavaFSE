import static org.junit.Assert.*;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class OrderedTests {

    @Test
    public void testC_third() {
        System.out.println("Third test");
        assertTrue(true);
    }

    @Test
    public void testA_first() {
        System.out.println("First test");
        assertTrue(true);
    }

    @Test
    public void testB_second() {
        System.out.println("Second test");
        assertTrue(true);
    }
}
