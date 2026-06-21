package spring;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

public class ParameterizedTest {

    @ParameterizedTest
    @CsvSource({"1,2,3", "4,5,9", "-1,1,0"})
    public void testAdd(int a, int b, int expected) {
        int result = a + b;
        assertEquals(expected, result);
    }
}
