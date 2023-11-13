package pw.edu.pl.backend.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "player")
public class PlayerEn {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "user_id")
    private Integer userId;
    @Basic
    @Column(name = "character_id")
    private Integer characterId;
    @Basic
    @Column(name = "play_id")
    private Integer playId;
    @Basic
    @Column(name = "rank")
    private int rank;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getCharacterId() {
        return characterId;
    }

    public void setCharacterId(Integer characterId) {
        this.characterId = characterId;
    }

    public Integer getPlayId() {
        return playId;
    }

    public void setPlayId(Integer playId) {
        this.playId = playId;
    }

    public int getRank() {
        return rank;
    }

    public void setRank(int rank) {
        this.rank = rank;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PlayerEn playerEn = (PlayerEn) o;
        return id == playerEn.id && Objects.equals(userId, playerEn.userId) && Objects.equals(characterId, playerEn.characterId) && Objects.equals(playId, playerEn.playId) && Objects.equals(rank, playerEn.rank);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, characterId, playId, rank);
    }
}
