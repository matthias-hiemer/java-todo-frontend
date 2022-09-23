package de.neuefische.backend.service;

import de.neuefische.backend.model.ToDo;
import de.neuefische.backend.model.ToDoDto;
import de.neuefische.backend.repo.ToDoRepo;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class ToDoServiceTest {

    ToDoRepo toDoRepo = mock(ToDoRepo.class);
    IdService idService = mock(IdService.class);
    ToDoService toDoService = new ToDoService(toDoRepo, idService);

    @Test
    void getAllToDos_Returns_AllToDos(){
        // GIVEN
        List<ToDo> toDos = new ArrayList<>();
        toDos.add(new ToDo("Friday-Exercise","OPEN" , "1"));
        when(toDoRepo.getAllToDos()).thenReturn(toDos);
        // WHEN

        List<ToDo> actual = toDoService.getAllToDos();
        // THEN

        assertEquals(toDos, actual);

    }

    @Test
    void getToDoById_Returns_ToDoForGivenId(){
        // GIVEN
        ToDo toDo = new ToDo("Friday-Exercise","OPEN" , "1");
        when(toDoRepo.getToDoById("1")).thenReturn(toDo);
        // WHEN

        ToDo actual = toDoService.getToDoById("1");
        // THEN

        assertEquals(toDo, actual);

    }

    @Test
    void postNewToDo_Returns_AddedToDo(){
        // GIVEN
        ToDoDto toDoDto = new ToDoDto("Friday-Exercise","OPEN");
        ToDo expectedToDo = new ToDo("Friday-Exercise","OPEN", "1");
        when(idService.generateID()).thenReturn("1");
        when(toDoRepo.addNewToDo(any())).thenReturn(ToDo.builder()
                .description(toDoDto.getDescription())
                .status(toDoDto.getStatus())
                .id("1")
                .build());
        // WHEN

        ToDo actual = toDoService.postNewToDo(toDoDto);
        // THEN

        assertEquals(expectedToDo, actual);
    }
    @Test
    void editToDo_Returns_EditedToDo(){
        // GIVEN
        ToDo toDo1 = new ToDo("Friday-Exercise","OPEN" , "1");
        when(toDoRepo.editToDo(any())).thenReturn(toDo1);
        // WHEN

        ToDo actual = toDoService.editToDo(toDo1);
        // THEN

        assertEquals(toDo1, actual);

    }

    @Test
    void deleteToDo_Returns_DeletedToDos(){
        // GIVEN
        ToDo toDo1 = new ToDo("Friday-Exercise","OPEN" , "1");
        when(toDoRepo.deleteToDo("1")).thenReturn(toDo1);
        // WHEN

        ToDo actual = toDoService.deleteToDo("1");
        // THEN

        assertEquals(toDo1, actual);

    }

}