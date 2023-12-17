package pw.edu.pl.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pw.edu.pl.backend.interfaces.IEquipment;
import pw.edu.pl.backend.modelDto.EquipmentDto;

@RestController
@AllArgsConstructor
public class EquipmentController {

    private final IEquipment equipmentService;

    @RequestMapping("/equipment/{playerId}")
    public EquipmentDto getPlayerEquipment(@PathVariable Long playerId) {
        return equipmentService.getPlayerEquipment(playerId);
    }
}
