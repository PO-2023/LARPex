package pw.edu.pl.backend.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pw.edu.pl.backend.interfaces.IEventService;
import pw.edu.pl.backend.interfaces.IPaymentService;
import pw.edu.pl.backend.mapper.EventMapper;
import pw.edu.pl.backend.model.Status;
import pw.edu.pl.backend.modelDto.*;
import pw.edu.pl.backend.repository.EventRepository;
import pw.edu.pl.backend.repositoryMapper.IEventRepositoryMapper;

import java.time.LocalDateTime;
import java.time.format.DateTimeParseException;
import java.util.List;

@Service
@AllArgsConstructor
public class EventService implements IEventService {
    // do usunięcia bo smailek chcial miec dodatkowa warstwe z repository
    EventRepository eventRepository;
    //////
    GameService gameService;
    IPaymentService paymentService;

    IEventRepositoryMapper eventRepositoryMapper;

    public List<EventWithGameDto> getAllEvents() {
        var events = eventRepositoryMapper.getAllEventsMap();
        return events.stream()
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
        var events = eventRepositoryMapper.getAllEventsMap().stream()
                .filter(eventDto ->
                        eventDto.getStartTime().isAfter(dateTimeFrom)
                                && eventDto.getEndTime().isBefore(dateTimeTo))
                .toList();
        return events.stream()
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

        return new EnrollEventDto(paymentStatusDTO.getId());
    }

    @Override
    public boolean unlockSlot(Long eventId) {
        EventDto eventWithId = eventRepository.findById(eventId)
                .map(EventMapper.INSTANCE::mapToEventDto)
                .orElse(null);

        if (eventWithId == null) {
            return false;
        } else {
            if (eventWithId.getStatus() == Status.Active) {
                eventWithId.setPlayers(eventWithId.getPlayers() - 1);
                eventRepository.save(EventMapper.INSTANCE.mapToEvent(eventWithId));
                return true;
            } else {
                return false;
            }
        }
    }

    private boolean lockSLot(Long eventId) {
        EventDto eventWithId = eventRepository.findById(eventId)
                .map(EventMapper.INSTANCE::mapToEventDto)
                .orElse(null);

        if (eventWithId == null) {
            return false;
        } else {
            if (eventWithId.getStatus() == Status.Active) {
                int playerLimit = gameService.findGameById(eventWithId.getGameId()).getPlayerLimit();
                if (eventWithId.getPlayers() >= playerLimit) {
                    return false;
                } else {
                    eventWithId.setPlayers(eventWithId.getPlayers() + 1);
                    eventRepository.save(EventMapper.INSTANCE.mapToEvent(eventWithId));
                    return true;
                }
            } else {
                return false;
            }
        }

    }
}
