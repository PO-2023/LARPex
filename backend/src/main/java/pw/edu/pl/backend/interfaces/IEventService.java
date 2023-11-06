package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.EventDto;

import java.util.List;

public interface IEventService {
    public List<EventDto> getAllEvents();
}
