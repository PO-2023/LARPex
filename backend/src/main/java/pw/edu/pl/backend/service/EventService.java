package pw.edu.pl.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class EventService implements IEventService {

    private final GameService gameService;
    private PaymentService paymentService;

    public EventService() {
        this.gameService = new GameService();
        this.paymentService = new PaymentService();
    }

    @Override
    public List<EventDto> getAllEvents(){
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE, 1L));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE, 2L));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED, 3L));
        return eventDtoList;
    }

    @Override
    public List<EventDto> getEvents(Date dateFrom, Date dateTo){
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE, 1L));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE, 2L));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED, 3L));

        List<EventDto> filteredEventList = eventDtoList.stream()
                .filter(eventDto ->
                        eventDto.getStartTime().after(dateFrom)
                        && eventDto.getEndTime().before(dateTo))
                .collect(Collectors.toList());

        return filteredEventList;
    }

    @Override
    public EventDto getEventById(Long eventId) {
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE, 1L));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE, 2L));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED, 3L));

        EventDto eventWithId = eventDtoList.stream()
                .filter(eventDto -> eventDto.getId().equals(eventId))
                .findFirst()
                .orElse(null);

        return eventWithId;
    }

    @Override
    public EnrollEventDTO enrollToEvent(Long eventId, Long userId) {
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE, 1L));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE, 2L));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED, 3L));

        boolean isLocked = lockSLot(eventId);

        if(!isLocked){
            return null;
        }
        //TODO: add JPA call here that will lock the slot in event entity

        PaymentStatusDTO paymentStatusDTO = paymentService.createPaymentRequest(new PaymentRequestDTO(eventId, userId, "PayPal"));

        return new EnrollEventDTO(paymentStatusDTO.getId());
    }

    //TODO: add procedure that will finish enrollment process - after successful payment

    private boolean lockSLot (Long eventId){
        List<EventDto> eventDtoList = new ArrayList<>();
        eventDtoList.add(new EventDto(1L, "Event 1", 50.0, new Date(), new Date(), Status.ACTIVE, 1L));
        eventDtoList.add(new EventDto(2L, "Event 2", 30.0, new Date(), new Date(), Status.INACTIVE, 1L));
        eventDtoList.add(new EventDto(3L, "Event 3", 75.0, new Date(), new Date(), Status.CANCELED, 1L));



        EventDto eventWithId = eventDtoList.stream()
                .filter(eventDto -> eventDto.getId().equals(eventId))
                .findFirst()
                .orElse(null);

        if(eventWithId == null){
            return false;
        }
        else{
            if(eventWithId.getStatus() == Status.ACTIVE){
                int playerLimit = gameService.findGameById(eventWithId.getGameId()).getPlayerLimit();
                if (eventWithId.getPlayers() >= playerLimit){
                    return false;
                }
                else{
                    eventWithId.setPlayers(eventWithId.getPlayers() + 1);
                    return true;
                }
            }
            else{
                return false;
            }
        }

    }
}
