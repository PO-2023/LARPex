package pw.edu.pl.backend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IPlayer;
import pw.edu.pl.backend.modelDto.CharacterDto;
import pw.edu.pl.backend.modelDto.PlayerDto;

@Service
public class PlayerService implements IPlayer {

    private List<PlayerDto> mockedPlayers = new ArrayList<>();

    public PlayerService() {
        mockedPlayers.add(new PlayerDto(1L, "Jan", "Kowalski", "jakow7711", new CharacterDto(), 0));
        mockedPlayers.add(new PlayerDto(2L, "Karol", "KArolowy", "tttyyy111", new CharacterDto(), 4));
        mockedPlayers.add(new PlayerDto(3L, "Adam", "Adamski", "ooonnn3322", new CharacterDto(), 2));
        
    }

    @Override
    public PlayerDto getPlayer(Long id) {
        if(mockedPlayers == null) {
            return null;
        }
        for(PlayerDto p : mockedPlayers) {
            if(p.getId() == id) {
                return p;
            }
        }
        return null;
    }

}
