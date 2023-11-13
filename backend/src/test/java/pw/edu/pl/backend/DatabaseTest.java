package pw.edu.pl.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import pw.edu.pl.backend.entity.*;
import pw.edu.pl.backend.repository.*;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class DatabaseTest {

    @Autowired
    EventRepository eventRepository;
    @Autowired
    CharacterRepository characterRepository;
    @Autowired
    EnrollRepository enrollRepository;
    @Autowired
    GameRepository gameRepository;
    @Autowired
    PlayerRepository playerRepository;
    @Autowired
    PlayRepository playRepository;
    @Autowired
    UserRepository userRepository;

    @Autowired
    PaymentRepository paymentRepository;


    @Test
    void getAllEvents() {
        List<EventEn> events = eventRepository.findAll();
        assertEquals(5, events.size());
    }

    @Test
    void getAllCharacters() {
        List<CharacterEn> characters = characterRepository.findAll();
        assertEquals(5, characters.size());
    }

    @Test
    void getAllEnrolls() {
        List<EnrollEn> enrolls = enrollRepository.findAll();
        assertEquals(5, enrolls.size());
    }

    @Test
    void getAllGames() {
        List<GameEn> games = gameRepository.findAll();
        assertEquals(5, games.size());
    }

    @Test
    void getAllPlayers() {
        List<PlayerEn> players = playerRepository.findAll();
        assertEquals(5, players.size());
    }

    @Test
    void getAllPlays() {
        List<PlayEn> plays = playRepository.findAll();
        assertEquals(5, plays.size());
    }

    @Test
    void getAllUsers() {
        List<UserEn> users = userRepository.findAll();
        assertEquals(5, users.size());
    }

    @Test
    void getAllPayments() {
        List<PaymentEn> payments = paymentRepository.findAll();
        assertEquals(3, payments.size());
    }
}
