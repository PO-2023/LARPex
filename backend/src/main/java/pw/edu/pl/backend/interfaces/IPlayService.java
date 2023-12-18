package pw.edu.pl.backend.interfaces;

import pw.edu.pl.backend.modelDto.PlayDto;

public interface IPlayService {
    PlayDto getAvailablePlays(Long userId);
}
