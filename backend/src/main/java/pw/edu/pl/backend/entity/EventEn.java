package pw.edu.pl.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table(name = "event")
public class EventEn {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "name")
    private String name;
    @Basic
    @Column(name = "price")
    private Double price;
    @Basic
    @Column(name = "start_time")
    private LocalDateTime startTime;
    @Basic
    @Column(name = "end_time")
    private LocalDateTime endTime;
    @Basic
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "game_id")
    private Integer gameId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Integer getGameId() {
        return gameId;
    }

    public void setGameId(Integer gameId) {
        this.gameId = gameId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EventEn eventEn = (EventEn) o;
        return id == eventEn.id && Objects.equals(name, eventEn.name) && Objects.equals(price, eventEn.price) && Objects.equals(startTime, eventEn.startTime) && Objects.equals(endTime, eventEn.endTime) && Objects.equals(status, eventEn.status) && Objects.equals(gameId, eventEn.gameId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, price, startTime, endTime, status, gameId);
    }
}
