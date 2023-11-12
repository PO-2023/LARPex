package pw.edu.pl.backend.service;

import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.EventDto;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService implements IEventService {

    @Override
    public List<EventDto> getAllEvents(){
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED));
        return eventDtoList;
    }

    @Override
    public List<EventDto> getEvents(Date dateFrom, Date dateTo){
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED));

        List<EventDto> filteredEventList = eventDtoList.stream()
                .filter(eventDto ->
                        eventDto.getStartTime().after(dateFrom)
                        && eventDto.getEndTime().before(dateTo))
                .collect(Collectors.toList());

        return filteredEventList;
    }

    @Override
    public EventDto getEventById(Long id) {
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED));

        EventDto eventWithId = eventDtoList.stream()
                .filter(eventDto -> eventDto.getId().equals(id))
                .findFirst()
                .orElse(null);

        return eventWithId;
    }
}
