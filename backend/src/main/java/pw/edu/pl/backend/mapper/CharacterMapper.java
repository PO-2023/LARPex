package pw.edu.pl.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import pw.edu.pl.backend.entity.CharacterEn;
import pw.edu.pl.backend.model.Character;

@Mapper
public interface CharacterMapper {
    CharacterMapper INSTANCE = Mappers.getMapper(CharacterMapper.class);

    Character mapToCharacter(CharacterEn character);
}
