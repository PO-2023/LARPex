package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.GameDTO;

public interface IGameService {

    GameDTO findGameById(Long gameId);
}
