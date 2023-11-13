package pw.edu.pl.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pw.edu.pl.backend.entity.EventEn;
import pw.edu.pl.backend.modelDto.EventDto;

@Mapper
public interface EventMapper {
    EventMapper INSTANCE = Mappers.getMapper(EventMapper.class);
    EventDto mapToEventDto(EventEn event);
    EventEn mapToEvent(EventDto eventDto);
}
