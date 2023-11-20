package pw.edu.pl.backend.repositoryMapper;

import org.springframework.stereotype.Repository;

import pw.edu.pl.backend.modelDto.PlayerDto;

@Repository
public interface IPlayerRepositoryMapper {
    public PlayerDto getPlayerWithBindedUserAndCharacter(int id);
}
