package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.EventDto;

import java.util.Date;
import java.util.List;

public interface IEventService {
    List<EventDto> getAllEvents();

    List<EventDto> getEvents(Date dateFrom, Date dateTo);

    EventDto getEventById(Long id);
}
