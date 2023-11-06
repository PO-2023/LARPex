package pw.edu.pl.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import pw.edu.pl.backend.service.EventService;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class EventServiceTest {

    @Test
    public void getAllEvents(){
        EventService eventService = new EventService();
        var eventDtoList = eventService.getAllEvents();
        assertEquals(3, eventDtoList.size());
    }

    @Test
    public void getEventsExistingInTimeFrame(){
        // Create a new Date object representing the current date and time
        Date currentDate = new Date();

        // Get the timestamp of the current date
        long currentTime = currentDate.getTime();

        // Calculate timestamps for the previous and next day
        long oneDayInMillis = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        long previousDayTime = currentTime - oneDayInMillis;
        long nextDayTime = currentTime + oneDayInMillis;

        EventService eventService = new EventService();
        var eventDtoList = eventService.getEvents(new Date(previousDayTime), new Date(nextDayTime));
        assertEquals(3, eventDtoList.size());
    }

    @Test
    public void getEventsNotExistingInFutureTimeFrame(){
        // Create a new Date object representing the current date and time
        Date currentDate = new Date();

        // Get the timestamp of the current date
        long currentTime = currentDate.getTime();

        // Calculate timestamps for the previous and next day
        long oneDayInMillis = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        long nextDayTime = currentTime + oneDayInMillis;
        long afterNextDayTime = currentTime + 2 * oneDayInMillis;

        EventService eventService = new EventService();
        var eventDtoList = eventService.getEvents(new Date(nextDayTime), new Date(afterNextDayTime));
        assertEquals(0, eventDtoList.size());
    }

    @Test
    public void getEventsNotExistingInPastTimeFrame(){
        // Create a new Date object representing the current date and time
        Date currentDate = new Date();

        // Get the timestamp of the current date
        long currentTime = currentDate.getTime();

        // Calculate timestamps for the previous and next day
        long oneDayInMillis = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        long previousDayTime = currentTime - oneDayInMillis;
        long beforePreviousDayTime = currentTime - 2 * oneDayInMillis;

        EventService eventService = new EventService();
        var eventDtoList = eventService.getEvents(new Date(beforePreviousDayTime), new Date(previousDayTime));
        assertEquals(0, eventDtoList.size());
    }


}
