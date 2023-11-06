package pw.edu.pl.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.service.EventService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/event")
    public List<EventDto> getAllEvents(){
        return eventService.getAllEvents();
    }
}
