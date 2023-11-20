package pw.edu.pl.backend.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "game")
public class GameEn {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "description")
    private String description;
    @Basic
    @Column(name = "author")
    private String author;
    @Basic
    @Column(name = "max_players")
    private Integer maxPlayers;
    @Basic
    @Column(name = "estimated_time")
    private String estimatedTime;
    @Basic
    @Column(name = "difficulty")
    private String difficulty;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Integer getMaxPlayers() {
        return maxPlayers;
    }

    public void setMaxPlayers(Integer maxPlayers) {
        this.maxPlayers = maxPlayers;
    }

    public String getEstimatedTime() {
        return estimatedTime;
    }

    public void setEstimatedTime(String estimatedTime) {
        this.estimatedTime = estimatedTime;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GameEn gameEn = (GameEn) o;
        return id == gameEn.id && Objects.equals(description, gameEn.description) && Objects.equals(author, gameEn.author) && Objects.equals(maxPlayers, gameEn.maxPlayers) && Objects.equals(estimatedTime, gameEn.estimatedTime) && Objects.equals(difficulty, gameEn.difficulty);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, author, maxPlayers, estimatedTime, difficulty);
    }
}
