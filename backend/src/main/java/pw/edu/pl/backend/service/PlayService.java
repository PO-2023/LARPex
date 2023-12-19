package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.entity.EnrollEn;
import pw.edu.pl.backend.entity.PlayEn;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.interfaces.IPlayService;
import pw.edu.pl.backend.mapper.PlayMapper;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.modelDto.PlayDto;
import pw.edu.pl.backend.repository.EnrollRepository;
import pw.edu.pl.backend.repository.PlayRepository;

@Service
public class PlayService implements IPlayService {

    @Autowired
    PlayRepository playRepository;

    @Autowired
    EnrollRepository enrollRepository;

    @Autowired
    IEventService eventService;


    @Override
    public PlayDto getAvailablePlays(Long userId) {
        EnrollEn enrollEn = enrollRepository.findByUserId(userId);
        if(enrollEn == null){
            return null;
        } else {
            EventDto event = eventService.getEventById(enrollEn.getEventId());
            if(event.getStatus() == Status.Active){
                return PlayMapper.INSTANCE.mapToPlayDto(playRepository.findByEventId(event.getId().intValue()));
            }
        }
        return playRepository.findByUserId(userId);
    }

    @Override
    public PlayDto joinPlay(Long playId, Long userId){
        return playRepository.findById(playId.intValue()).map(playEn -> {
            playEn.setNumberOfPlayers(playEn.getNumberOfPlayers() + 1);
            return PlayMapper.INSTANCE.mapToPlayDto(playRepository.save(playEn));
        }).orElseThrow(() -> new RuntimeException("Play not found"));
    }
}
