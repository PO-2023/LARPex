package pw.edu.pl.backend.repositoryMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.mapper.EventMapper;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.repository.EventRepository;

import java.util.List;

@Service
public class EventRepositoryMapper implements IEventRepositoryMapper {

    @Autowired
    EventRepository eventRepository;

    public List<EventDto> getAllEventsMap(){
        return eventRepository.findAll().stream().map(EventMapper.INSTANCE::mapToEventDto).toList();
    }

    public EventDto getEventByIdMap(Long eventId){
        return eventRepository.findById(eventId)
                .map(EventMapper.INSTANCE::mapToEventDto)
                .orElse(null);
    }

}
