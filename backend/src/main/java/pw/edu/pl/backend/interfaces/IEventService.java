package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.EventDto;

import java.util.Date;
import java.util.List;

public interface IEventService {
    public List<EventDto> getAllEvents();

    public List<EventDto> getEvents(Date dateFrom, Date dateTo);
}
