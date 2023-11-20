package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pw.edu.pl.backend.entity.EnrollEn;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.interfaces.IPlayerService;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.modelDto.PlayerDto;
import pw.edu.pl.backend.modelDto.PlayerWithActiveEventDto;
import pw.edu.pl.backend.repository.EnrollRepository;
import pw.edu.pl.backend.repositoryMapper.IPlayerRepositoryMapper;

@Service
public class PlayerService implements IPlayerService {

    @Autowired
    IPlayerRepositoryMapper playerRepositoryMapper;

    @Autowired
    EnrollRepository enrollRepository;

    @Autowired
    IEventService eventService;

    @Override
    public PlayerDto getPlayer(Long id) {
        return playerRepositoryMapper.getPlayerWithBindedUserAndCharacter(Math.toIntExact(id));
    }

    @Override
    public PlayerWithActiveEventDto getPlayerWithActiveEvent(Long id) {
        EnrollEn enrollEn = enrollRepository.findByUserId(id);
        if(enrollEn == null) {
            return null;
        } else {
            EventDto event = eventService.getEventById(Long.valueOf(enrollEn.getEventId()));
            if(event.getStatus() == Status.Active){
                return new PlayerWithActiveEventDto(id, getPlayer(id).getName(), getPlayer(id).getSurname(), getPlayer(id).getNickname(), getPlayer(id).getCharacter(), getPlayer(id).getRank(), event);
            } else {
                return null;
            }

        }
    }
}
