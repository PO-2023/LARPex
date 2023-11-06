package pw.edu.pl.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import pw.edu.pl.backend.service.EventService;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class EventServiceTest {

    @Test
    public void getAllEvents(){
        EventService eventService = new EventService();
        var eventDtoList = eventService.getAllEvents();
        assertEquals(3, eventDtoList.size());
    }

}
