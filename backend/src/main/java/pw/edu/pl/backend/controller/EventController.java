package pw.edu.pl.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.entity.EventEn;
import pw.edu.pl.backend.repository.EventRepository;
import pw.edu.pl.backend.service.EventService;

import java.util.Date;
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

    @GetMapping("/event/{dateFrom}/{dateTo}")
    public List<EventDto> getEvents(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date dateFrom,
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Date dateTo){
        return eventService.getEvents(dateFrom, dateTo);
    }
}
