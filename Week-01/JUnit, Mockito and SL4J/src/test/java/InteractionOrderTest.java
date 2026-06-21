import static org.mockito.Mockito.*;
import org.mockito.InOrder;
import org.junit.Test;

public class InteractionOrderTest {

    @Test
    public void testInteractionOrder() {
        EmailService mockService = mock(EmailService.class);

        mockService.sendEmail("a@b.com", "Sub1", "Body1");
        mockService.sendEmail("c@d.com", "Sub2", "Body2");

        InOrder inOrder = inOrder(mockService);
        inOrder.verify(mockService).sendEmail("a@b.com", "Sub1", "Body1");
        inOrder.verify(mockService).sendEmail("c@d.com", "Sub2", "Body2");
    }
}
