package de.neuefische.backend.controller;

import de.neuefische.backend.model.ToDo;
import de.neuefische.backend.model.ToDoDto;
import de.neuefische.backend.service.ToDoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/todo")
public class ToDoController {

    private ToDoService service;

    @Autowired
    public ToDoController(ToDoService service) {
        this.service = service;
    }
    @GetMapping
    public List<ToDo> getAllToDos(){
        return service.getAllToDos();
    }

    @GetMapping("{id}")
    public ToDo getToDoById(@PathVariable String id){
        return service.getToDoById(id);
    }


    @PostMapping
    public ToDo postNewToDo(@RequestBody ToDoDto toDoDto){
        return service.postNewToDo(toDoDto);
    }

    @PutMapping("{id}")
    public ToDo editToDo(@PathVariable String id, @RequestBody ToDo toDoDetails){
        return service.editToDo(toDoDetails);
    }

    @DeleteMapping("{id}")
    public ToDo deleteToDo(@PathVariable String id){
       return service.deleteToDo(id);
    }


}
