package pw.edu.pl.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import pw.edu.pl.backend.entity.UserEn;

@Mapper
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserEn mapToUserEn(UserEn user);
}
