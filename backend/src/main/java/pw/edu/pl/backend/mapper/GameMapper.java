package pw.edu.pl.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;
import pw.edu.pl.backend.entity.GameEn;
import pw.edu.pl.backend.modelDto.GameDto;

@Mapper
public interface GameMapper {
    GameMapper INSTANCE = Mappers.getMapper(GameMapper.class);

    @Mapping(target = "title",source = "description")
    @Mapping(target = "playerLimit",source = "maxPlayers")
    GameDto mapToGameDto(GameEn game);
}
