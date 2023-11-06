package pw.edu.pl.backend.service;

import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.EventDto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class EventService implements IEventService {

    public List<EventDto> getAllEvents(){
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED));
        return eventDtoList;
    }
}
