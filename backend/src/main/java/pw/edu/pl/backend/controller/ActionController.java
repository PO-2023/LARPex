package pw.edu.pl.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import pw.edu.pl.backend.interfaces.IActionService;
import pw.edu.pl.backend.modelDto.ActionDto;
import pw.edu.pl.backend.modelDto.ActionResultDto;

@RestController
@AllArgsConstructor
public class ActionController {


    private final IActionService iActionService;

    @PostMapping("action")
    public ResponseEntity<ActionResultDto> runQRAction(@RequestBody ActionDto actionDto) {
        return ResponseEntity.ok().body(iActionService.runQRAction(actionDto));
    }


}
