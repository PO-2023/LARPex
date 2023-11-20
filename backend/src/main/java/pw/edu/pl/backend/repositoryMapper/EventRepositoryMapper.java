package pw.edu.pl.backend.repositoryMapper;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.mapper.EventMapper;
import pw.edu.pl.backend.mapper.GameMapper;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.modelDto.EventWithGameDto;
import pw.edu.pl.backend.repository.EventRepository;
import pw.edu.pl.backend.repository.GameRepository;
import pw.edu.pl.backend.repository.PlayRepository;

import java.util.List;

@Service
@AllArgsConstructor
public class EventRepositoryMapper implements IEventRepositoryMapper {

    EventRepository eventRepository;
    GameRepository gameRepository;
    PlayRepository playRepository;

    public List<EventDto> getAllEventsMap(){
        return eventRepository.findAll().stream().map(EventMapper.INSTANCE::mapToEventDto).toList();
    }

    public EventDto getEventByIdMap(Long eventId){
        return eventRepository.findById(eventId)
                .map(EventMapper.INSTANCE::mapToEventDto)
                .orElse(null);
    }

    public EventWithGameDto getEventWithGameDtoByDate(EventDto event){
        var game = gameRepository.findById(event.getGameId()).map(GameMapper.INSTANCE::mapToGameDto).get();
        var play = playRepository.findByEventId(Math.toIntExact(event.getGameId()));
        return new EventWithGameDto(event.getId(), event.getName(),
                event.getPrice(), event.getStartTime(), event.getEndTime(),
                event.getStatus(), play.getNumberOfPlayers(), game);
    }

    public void saveEvent(EventDto event) {
        eventRepository.save(EventMapper.INSTANCE.mapToEvent(event));
    }
}
