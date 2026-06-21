package spring;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @Test
    public void testGetUser() throws Exception {
        User mockUser = new User(1L, "Shreyansh Pandit");
        when(userService.getUserById(1L)).thenReturn(mockUser);

        mockMvc.perform(get("/users/1"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("Shreyansh Pandit"));
    }

    @Test
    public void testCreateUser() throws Exception {
        User mockUser = new User(1L, "Shreyansh Pandit");
        when(userService.saveUser(any(User.class))).thenReturn(mockUser);

        mockMvc.perform(post("/users")
                .contentType("application/json")
                .content("{\"id\":1,\"name\":\"Shreyansh Pandit\"}"))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$.name").value("Shreyansh Pandit"));
    }
}
