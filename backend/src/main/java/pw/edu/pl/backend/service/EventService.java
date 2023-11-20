package pw.edu.pl.backend.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.interfaces.IPaymentService;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.*;
import pw.edu.pl.backend.repositoryMapper.IEventRepositoryMapper;

import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.List;

@Service
@AllArgsConstructor
public class EventService implements IEventService {
    GameService gameService;
    IPaymentService paymentService;

    IEventRepositoryMapper eventRepositoryMapper;

    public List<EventWithGameDto> getAllEvents() {
        return eventRepositoryMapper.getAllEventsMap()
                .stream()
                .map(e -> eventRepositoryMapper.getEventWithGameDtoByDate(e))
                .toList();
    }

    public List<EventWithGameDto> getEvents(String dateFrom, String dateTo) {
        LocalDateTime dateTimeFrom;
        LocalDateTime dateTimeTo;
        try {
            dateTimeFrom = LocalDateTime.parse(dateFrom + "T00:00:00");
            dateTimeTo = LocalDateTime.parse(dateTo + "T00:00:00").plusDays(1);
            System.out.println(dateTimeTo);

        } catch (DateTimeParseException exception) {
            throw exception;
        }
        return eventRepositoryMapper.getAllEventsMap().stream()
                .filter(eventDto ->
                        eventDto.getStartTime().isAfter(dateTimeFrom)
                                && eventDto.getEndTime().isBefore(dateTimeTo))
                .map(e -> eventRepositoryMapper.getEventWithGameDtoByDate(e))
                .toList();
    }


    public EventDto getEventById(Long eventId) {
        return eventRepositoryMapper.getEventByIdMap(eventId);
    }

    public EnrollEventDto enrollToEvent(Long eventId, Long userId) {

        boolean isLocked = lockSLot(eventId);

        if (!isLocked) {
            return null;
        }

        PaymentStatusDto paymentStatusDTO = paymentService.createPaymentRequest(new PaymentRequestDto("PayPal"));

        EventDto eventDto = getEventById(eventId);

        return new EnrollEventDto(paymentStatusDTO.getId(), eventDto.getPrice());
    }

    @Override
    public boolean unlockSlot(Long eventId) {
        EventDto eventWithId = eventRepositoryMapper.getEventByIdMap(eventId);

        if (eventWithId == null) {
            return false;
        } else {
            if (eventWithId.getStatus() == Status.Active) {
                eventWithId.setPlayers(eventWithId.getPlayers() - 1);
                eventRepositoryMapper.saveEvent(eventWithId);
                return true;
            } else {
                return false;
            }
        }
    }

    private boolean lockSLot(Long eventId) {
        EventDto eventWithId = eventRepositoryMapper.getEventByIdMap(eventId);

        if (eventWithId == null) {
            return false;
        } else {
            if (eventWithId.getStatus() == Status.Active) {
                int playerLimit = gameService.findGameById(eventWithId.getGameId()).getPlayerLimit();
                if (eventWithId.getPlayers() >= playerLimit) {
                    return false;
                } else {
                    eventWithId.setPlayers(eventWithId.getPlayers() + 1);
                    eventRepositoryMapper.saveEvent(eventWithId);
                    return true;
                }
            } else {
                return false;
            }
        }

    }
}
