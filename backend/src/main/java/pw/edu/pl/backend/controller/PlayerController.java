package pw.edu.pl.backend.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pw.edu.pl.backend.modelDto.PlayerDto;
import pw.edu.pl.backend.service.PlayerService;

@RestController
public class PlayerController {

    private final PlayerService playerService;
    
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

    @RequestMapping("/players/{id}")
    public PlayerDto getPlayer(@PathVariable Long id) {
        return playerService.getPlayer(id);
    }
}
