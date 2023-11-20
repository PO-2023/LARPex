package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.PlayerDto;
import pw.edu.pl.backend.modelDto.PlayerWithActiveEventDto;

public interface IPlayerService {
    public PlayerDto getPlayer(Long id);
    public PlayerWithActiveEventDto getPlayerWithActiveEvent(Long id);
}