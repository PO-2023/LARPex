package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IPlayService;
import pw.edu.pl.backend.modelDto.PlayDto;
import pw.edu.pl.backend.repository.PlayRepository;

@Service
public class PlayService implements IPlayService {

    @Autowired
    PlayRepository playRepository;


    @Override
    public PlayDto getAvailablePlays(Long userId) {
        return playRepository.findByUserId(userId);
    }
}
