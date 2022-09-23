package de.neuefische.backend.service;

import de.neuefische.backend.model.ToDo;
import de.neuefische.backend.model.ToDoDto;
import de.neuefische.backend.repo.ToDoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.UUID;

@Service
public class ToDoService {

    private ToDoRepo toDoRepo;
    private IdService idService;

    public ToDoService(ToDoRepo toDoRepo, IdService idService) {
        this.toDoRepo = toDoRepo;
        this.idService = idService;
    }

    @Autowired


    public List<ToDo> getAllToDos(){
        return toDoRepo.getAllToDos();
    }

    public ToDo postNewToDo(ToDoDto toDo) {
        ToDo newToDo = ToDo.builder()
                .status(toDo.getStatus())
                .description(toDo.getDescription())
                .id(idService.generateID())
                .build();
        return toDoRepo.addNewToDo(newToDo);
    }

    public ToDo getToDoById(String id) {
        ToDo foundToDo = toDoRepo.getToDoById(id);
        if(foundToDo == null){
            throw new NoSuchElementException("No ToDo was found with id: " + id);
        }
        return toDoRepo.getToDoById(id);
    }

    public ToDo editToDo(ToDo toEditToDo) {
        return toDoRepo.editToDo(toEditToDo);
    }

    public ToDo deleteToDo(String id) {
        return toDoRepo.deleteToDo(id);
    }
}
