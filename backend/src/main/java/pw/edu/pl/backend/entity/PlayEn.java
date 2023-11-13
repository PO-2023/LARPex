package pw.edu.pl.backend.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "play")
public class PlayEn {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "event_id")
    private Integer eventId;
    @Basic
    @Column(name = "number_of_players")
    private Integer numberOfPlayers;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
    }

    public Integer getNumberOfPlayers() {
        return numberOfPlayers;
    }

    public void setNumberOfPlayers(Integer numberOfPlayers) {
        this.numberOfPlayers = numberOfPlayers;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PlayEn playEn = (PlayEn) o;
        return id == playEn.id && Objects.equals(eventId, playEn.eventId) && Objects.equals(numberOfPlayers, playEn.numberOfPlayers);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, eventId, numberOfPlayers);
    }
}
