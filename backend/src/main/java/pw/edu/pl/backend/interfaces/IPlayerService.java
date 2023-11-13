package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.PlayerDto;

public interface IPlayerService {
    public PlayerDto getPlayer(Long id);
}