import static org.junit.Assert.*;
import org.junit.Before;
import org.junit.After;
import org.junit.Test;

public class AAATest {

    private Calculator calc;

    @Before
    public void setUp() {
        calc = new Calculator();
        System.out.println("Setup: Calculator created");
    }

    @After
    public void tearDown() {
        calc = null;
        System.out.println("Teardown: Calculator destroyed");
    }

    @Test
    public void testAddWithAAA() {
        // Arrange
        int a = 10, b = 20;

        // Act
        int result = calc.add(a, b);

        // Assert
        assertEquals(30, result);
    }

    @Test
    public void testSubtractWithAAA() {
        // Arrange
        int a = 50, b = 15;

        // Act
        int result = calc.subtract(a, b);

        // Assert
        assertEquals(35, result);
    }
}
