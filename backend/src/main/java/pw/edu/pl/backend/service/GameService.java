package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.mapper.GameMapper;
import pw.edu.pl.backend.modelDto.GameDto;
import pw.edu.pl.backend.repository.GameRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameService {

    @Autowired
    GameRepository gameRepository;

    public GameDto findGameById(Long gameId) {
        return gameRepository.findById(Math.toIntExact(gameId))
                .map(GameMapper.INSTANCE::mapToGameDto)
                .orElse(null);
    }
}
