import static org.junit.Assert.*;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.Parameterized;
import org.junit.runners.Parameterized.Parameters;
import java.util.Arrays;
import java.util.Collection;

@RunWith(Parameterized.class)
public class EvenCheckerTest {

    private int input;
    private boolean expected;

    public EvenCheckerTest(int input, boolean expected) {
        this.input = input;
        this.expected = expected;
    }

    @Parameters
    public static Collection<Object[]> data() {
        return Arrays.asList(new Object[][] {
            {2, true},
            {3, false},
            {0, true},
            {-4, true},
            {7, false}
        });
    }

    @Test
    public void testIsEven() {
        EvenChecker checker = new EvenChecker();
        assertEquals(expected, checker.isEven(input));
    }
}
