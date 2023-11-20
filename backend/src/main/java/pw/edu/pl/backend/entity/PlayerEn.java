package pw.edu.pl.backend.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "player")
public class PlayerEn {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "user_id")
    private Long userId;
    @Basic
    @Column(name = "character_id")
    private Long characterId;
    @Basic
    @Column(name = "play_id")
    private Long playId;
    @Basic
    @Column(name = "rank")
    private Integer rank;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCharacterId() {
        return characterId;
    }

    public void setCharacterId(Long characterId) {
        this.characterId = characterId;
    }

    public Long getPlayId() {
        return playId;
    }

    public void setPlayId(Long playId) {
        this.playId = playId;
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
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
