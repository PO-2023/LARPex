package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.EnrollEventDto;
import pw.edu.pl.backend.modelDto.EventDto;

import java.util.List;

public interface IEventService {
    List<EventDto> getAllEvents();

    List<EventDto> getEvents(String dateFrom, String dateTo);

    EventDto getEventById(Long eventId);

    EnrollEventDto enrollToEvent(Long id, Long userId);
}
