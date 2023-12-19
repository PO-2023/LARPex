package pw.edu.pl.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import pw.edu.pl.backend.entity.PlayEn;
import pw.edu.pl.backend.modelDto.PlayDto;

@Mapper
public interface PlayMapper {
    PlayMapper INSTANCE = Mappers.getMapper(PlayMapper.class);
    PlayDto mapToPlayDto(PlayEn playEn);
}
