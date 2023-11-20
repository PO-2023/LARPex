package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.EnrollEventDto;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.modelDto.EventWithGameDto;

import java.util.List;

public interface IEventService {
    List<EventWithGameDto> getAllEvents();

    List<EventWithGameDto> getEvents(String dateFrom, String dateTo);

    EventDto getEventById(Long eventId);

    EnrollEventDto enrollToEvent(Long id, Long userId);

    boolean unlockSlot(Long eventId);
}
