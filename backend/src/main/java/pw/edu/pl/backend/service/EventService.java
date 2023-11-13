package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.mapper.EventMapper;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.repository.EventRepository;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService implements IEventService {

    @Autowired
    EventRepository eventRepository;
//    EventMapper eventMapper;
//    public EventService(EventMapper eventMapper) {
//        this.eventMapper = eventMapper;
//    }

    //    @Autowired


    public List<EventDto> getAllEvents(){
        var events = eventRepository.findAll();

        return events.stream().map(EventMapper.INSTANCE::mapToEventDto).toList();
    }

    public List<EventDto> getEvents(Date dateFrom, Date dateTo){
        List<EventDto> eventDtoList = eventRepository.findAll()
                .stream()
                .map(EventMapper.INSTANCE::mapToEventDto)
                .toList();

        return eventDtoList.stream()
                .filter(eventDto ->
                        eventDto.getStartTime().after(dateFrom)
                        && eventDto.getEndTime().before(dateTo))
                .collect(Collectors.toList());
    }
}
