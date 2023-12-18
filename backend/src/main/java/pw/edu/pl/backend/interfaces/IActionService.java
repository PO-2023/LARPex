package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.ActionDto;
import pw.edu.pl.backend.modelDto.ActionResultDto;

public interface IActionService {
    ActionResultDto runQRAction(ActionDto actionDto);

}
