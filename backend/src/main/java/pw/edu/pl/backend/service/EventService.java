package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.mapper.EventMapper;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.EnrollEventDto;
import pw.edu.pl.backend.modelDto.EventDto;
import pw.edu.pl.backend.modelDto.PaymentRequestDto;
import pw.edu.pl.backend.modelDto.PaymentStatusDto;
import pw.edu.pl.backend.repository.EventRepository;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService implements IEventService {

    @Autowired
    EventRepository eventRepository;

    @Autowired
    GameService gameService;

    @Autowired
    PaymentService paymentService;
//    EventMapper eventMapper;
//    public EventService(EventMapper eventMapper) {
//        this.eventMapper = eventMapper;
//    }

    //    @Autowired


    public List<EventDto> getAllEvents(){
        var events = eventRepository.findAll();

        return events.stream().map(EventMapper.INSTANCE::mapToEventDto).toList();
    }

    public List<EventDto> getEvents(Date dateFrom, Date dateTo){
        List<EventDto> eventDtoList = eventRepository.findAll()
                .stream()
                .map(EventMapper.INSTANCE::mapToEventDto)
                .toList();

        return eventDtoList.stream()
                .filter(eventDto ->
                        eventDto.getStartTime().after(dateFrom)
                        && eventDto.getEndTime().before(dateTo))
                .collect(Collectors.toList());
    }

    public EventDto getEventById(Long eventId) {
        return eventRepository.findById(Math.toIntExact(eventId))
                .map(EventMapper.INSTANCE::mapToEventDto)
                .orElse(null);
    }

    public EnrollEventDto enrollToEvent(Long eventId, Long userId) {

        boolean isLocked = lockSLot(eventId);

        if(!isLocked){
            return null;
        }

        PaymentStatusDto paymentStatusDTO = paymentService.createPaymentRequest(new PaymentRequestDto("PayPal"));

        return new EnrollEventDto(1L);
    }

    public boolean unlockSlot(Long eventId){
        EventDto eventWithId = eventRepository.findById(Math.toIntExact(eventId))
                .map(EventMapper.INSTANCE::mapToEventDto)
                .orElse(null);

        if(eventWithId == null){
            return false;
        }
        else{
            if(eventWithId.getStatus() == Status.Active){
                eventWithId.setPlayers(eventWithId.getPlayers() - 1);
                eventRepository.save(EventMapper.INSTANCE.mapToEvent(eventWithId));
                return true;
            }
            else{
                return false;
            }
        }
    }

    private boolean lockSLot (Long eventId){
        EventDto eventWithId = eventRepository.findById(Math.toIntExact(eventId))
                .map(EventMapper.INSTANCE::mapToEventDto)
                .orElse(null);

        if(eventWithId == null){
            return false;
        }
        else{
            if(eventWithId.getStatus() == Status.Active){
                int playerLimit = gameService.findGameById(eventWithId.getGameId()).getPlayerLimit();
                if (eventWithId.getPlayers() >= playerLimit){
                    return false;
                }
                else{
                    eventWithId.setPlayers(eventWithId.getPlayers() + 1);
                    eventRepository.save(EventMapper.INSTANCE.mapToEvent(eventWithId));
                    return true;
                }
            }
            else{
                return false;
            }
        }

    }
}
