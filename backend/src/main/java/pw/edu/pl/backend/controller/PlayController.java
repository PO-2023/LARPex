package pw.edu.pl.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pw.edu.pl.backend.interfaces.IPlayService;
import pw.edu.pl.backend.modelDto.PlayDto;

@RestController
@AllArgsConstructor
public class PlayController {

    private final IPlayService iPlayService;

    @GetMapping("/play")
    public ResponseEntity<PlayDto> getAvailablePlays() {
        return ResponseEntity.ok().body(iPlayService.getAvailablePlays(1L));
    }
    @GetMapping("/play/{id}")
    public ResponseEntity<PlayDto> joinPlay(Long playId) {
        return ResponseEntity.ok().body(iPlayService.joinPlay(playId, 1L));
    }

}
