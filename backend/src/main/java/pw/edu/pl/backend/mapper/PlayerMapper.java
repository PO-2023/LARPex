package pw.edu.pl.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import pw.edu.pl.backend.entity.PlayerEn;
import pw.edu.pl.backend.model.Player;

@Mapper
public interface PlayerMapper {
    PlayerMapper INSTANCE = Mappers.getMapper(PlayerMapper.class);

    Player mapToPlayer(PlayerEn player);
}
