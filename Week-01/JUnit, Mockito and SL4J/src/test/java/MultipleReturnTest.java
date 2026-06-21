import static org.mockito.Mockito.*;
import static org.junit.Assert.*;
import org.junit.Test;

public class MultipleReturnTest {

    @Test
    public void testMultipleReturnValues() {
        DataProvider mockProvider = mock(DataProvider.class);
        when(mockProvider.getData())
            .thenReturn("First")
            .thenReturn("Second")
            .thenReturn("Third");

        assertEquals("First", mockProvider.getData());
        assertEquals("Second", mockProvider.getData());
        assertEquals("Third", mockProvider.getData());
    }
}
