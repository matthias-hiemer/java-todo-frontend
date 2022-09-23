package de.neuefische.backend.controller;

import de.neuefische.backend.model.ToDo;
import de.neuefische.backend.repo.ToDoRepo;
import de.neuefische.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
@AutoConfigureMockMvc
class ToDoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ToDoRepo toDoRepo;
    @MockBean
    private IdService idService;




    @Test
    void getAllToDos_Returns_AllToDosInRepo() throws Exception {

        // GIVEN
        toDoRepo.addNewToDo(new ToDo("Test", "OPEN", "1"));
        toDoRepo.addNewToDo(new ToDo("Test2", "DONE", "2"));

        String expectedJSON = """
                [
                    {
                        "description":"Test",
                        "status":"OPEN",
                        "id": "1"
                    },
                    {
                        "description":"Test2",
                        "status":"DONE",
                        "id":"2"
                    }
                ]
                """;
        //WHEN+THEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/todo"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }

    @Test
    void getToDoById_Returns_ToDoForGivenId() throws Exception {

        // GIVEN
        toDoRepo.addNewToDo(new ToDo("Friday-Exercise", "OPEN", "1"));

        String expectedJson= """
                
                {
                    "description": "Friday-Exercise",
                    "status": "OPEN",
                    "id": "1"
                }
                
                
                """;

        // WHEN & THEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/todo/1"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJson));

    }

    @Test
    void postNewToDo_Returns_AddedToDo() throws Exception{

        //GIVEN
        when(idService.generateID()).thenReturn("1");
        String requestBody = """
                    {
                        "description": "new to do",
                        "status": "OPEN"
                    }
                """;

        String expectedResponseBody = """
                    {
                        "description": "new to do",
                        "status": "OPEN",
                        "id": "1"
                    }
                """;

        mockMvc.perform(
                        post("/api/todo")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedResponseBody));
    }

    @Test
    void editToDo_ShouldEditToDo() throws Exception{
        //GIVEN
        toDoRepo.addNewToDo(new ToDo("Friday-Exercise", "OPEN", "1"));
        toDoRepo.addNewToDo(new ToDo("new to do", "OPEN", "2"));
        String requestBody = """
                    {
                        "description": "new to do",
                        "status": "IN-PROGRESS",
                        "id": "2"
                    }
                """;

        String expectedResponseBody = """
                    {
                        "description": "new to do",
                        "status": "IN-PROGRESS",
                        "id": "2"
                    }
                """;

        mockMvc.perform(
                        put("/api/todo/2")
                                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                                .content(requestBody))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedResponseBody));

        // THEN
        List<ToDo> toDos = toDoRepo.getAllToDos();
        assertThat(toDos, containsInAnyOrder(
                new ToDo("Friday-Exercise", "OPEN", "1"),
                new ToDo("new to do", "IN-PROGRESS", "2")
        ));
    }

    @Test
    void deleteToDo_ShouldDeleteToDo() throws Exception{
        //GIVEN
        toDoRepo.addNewToDo(new ToDo("Friday-Exercise", "OPEN", "1"));
        toDoRepo.addNewToDo(new ToDo("new to do", "OPEN", "2"));

        // WHEN
        mockMvc.perform(delete("/api/todo/1"));

        //THEN
        List<ToDo> toDos = toDoRepo.getAllToDos();
        assertThat(toDos, containsInAnyOrder(
                new ToDo("new to do", "OPEN", "2")));
    }

}