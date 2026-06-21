import static org.mockito.Mockito.*;
import static org.junit.Assert.*;
import org.junit.Test;

public class ArgumentMatcherTest {

    @Test
    public void testArgumentMatchers() {
        EmailService mockService = mock(EmailService.class);
        mockService.sendEmail("shreyanshloop07@gmail.com", "Welcome", "Hello");

        verify(mockService).sendEmail(anyString(), anyString(), anyString());
        verify(mockService).sendEmail(contains("shreyansh"), anyString(), anyString());
    }
}
