package pw.edu.pl.backend.repositoryMapper;

import org.springframework.stereotype.Repository;
import pw.edu.pl.backend.modelDto.EventDto;

import java.util.List;
@Repository
public interface IEventRepositoryMapper {

     List<EventDto> getAllEventsMap();

     EventDto getEventByIdMap(Long eventId);

}
