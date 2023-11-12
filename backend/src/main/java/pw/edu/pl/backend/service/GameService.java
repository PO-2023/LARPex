package pw.edu.pl.backend.service;

import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IGameService;
import pw.edu.pl.backend.modelDto.GameDTO;

import java.util.ArrayList;
import java.util.List;

@Service
public class GameService implements IGameService {

    @Override
    public GameDTO findGameById(Long gameId) {
        List<GameDTO> gameDTOList = new ArrayList<>();
        gameDTOList.add(new GameDTO("Author", "Title", "Description", 1L, 5));

        GameDTO gameWithId = gameDTOList.stream()
                .filter(gameDTO -> gameDTO.getId().equals(gameId))
                .findFirst()
                .orElse(null);
        return gameWithId;
    }


}
