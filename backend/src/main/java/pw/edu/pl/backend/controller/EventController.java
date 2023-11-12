package pw.edu.pl.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pw.edu.pl.backend.modelDto.EnrollEventDTO;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.service.EventService;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
public class EventController {

    private final EventService eventService;

    @Autowired
    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @GetMapping("/event")
    public List<EventDto> getEvents(
            @RequestParam(name = "dateFrom", required = false) String dateFrom,
            @RequestParam(name = "dateTo", required = false) String dateTo){

        if (dateFrom == null || dateTo == null) {
            return eventService.getAllEvents();
        }
        else{
            DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
            Date dateFromParsed = null;
            Date dateToParsed = null;
            try {
                dateFromParsed = dateFormat.parse(dateFrom);
                dateToParsed = dateFormat.parse(dateTo);
            } catch (Exception e) {
                e.printStackTrace();
            }
            return eventService.getEvents(dateFromParsed, dateToParsed);
        }
    }

    @GetMapping("/event/{eventId}")
    public EventDto getEvent(@PathVariable Long eventId){
        return eventService.getEventById(eventId);
    }

    @PostMapping("/event/{id}")
    public EnrollEventDTO enrollToEvent(@PathVariable Long id, @RequestBody Long userId){
        return eventService.enrollToEvent(id, userId);
    }
}
