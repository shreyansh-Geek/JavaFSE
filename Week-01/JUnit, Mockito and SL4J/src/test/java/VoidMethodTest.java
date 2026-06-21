import static org.mockito.Mockito.*;
import org.junit.Test;

public class VoidMethodTest {

    @Test
    public void testVoidMethod() {
        LoggerService mockLogger = mock(LoggerService.class);

        doNothing().when(mockLogger).log(anyString());
        mockLogger.log("Test message");

        verify(mockLogger).log("Test message");
    }

    @Test(expected = RuntimeException.class)
    public void testVoidMethodThrowsException() {
        LoggerService mockLogger = mock(LoggerService.class);

        doThrow(new RuntimeException("Log failed")).when(mockLogger).clearLogs();
        mockLogger.clearLogs();
    }
}
