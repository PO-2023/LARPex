package pw.edu.pl.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.modelDto.EnrollEventDto;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.modelDto.EventWithGameDto;

import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.List;

@RestController
@AllArgsConstructor
public class EventController {

    private final IEventService eventService;


    @GetMapping("/event")
    public ResponseEntity<List<EventWithGameDto>> getEvents(
            @RequestParam(name = "dateFrom", required = false) String dateFrom,
            @RequestParam(name = "dateTo", required = false) String dateTo) {

        if (dateFrom == null || dateTo == null) {
            return ResponseEntity.ok().body(eventService.getAllEvents());
        } else {
            try {
                return ResponseEntity.ok().body(eventService.getEvents(dateFrom,dateTo));
            } catch (DateTimeParseException exception) {
                return ResponseEntity.badRequest().body(new ArrayList<>());
            }
        }
    }

    @GetMapping("/event/{eventId}")
    public EventDto getEvent(@PathVariable Long eventId) {
        return eventService.getEventById(eventId);
    }

    @PostMapping("/event/{id}")
    public EnrollEventDto enrollToEvent(@PathVariable Long id, @RequestBody Long userId) {
        return eventService.enrollToEvent(id, userId);
    }
}
