import static org.junit.Assert.*;
import org.junit.Test;

public class ExceptionThrowerTest {

    @Test(expected = RuntimeException.class)
    public void testThrowException() {
        ExceptionThrower thrower = new ExceptionThrower();
        thrower.throwException();
    }
}
