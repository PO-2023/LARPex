package pw.edu.pl.backend.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "door")
public class DoorEn {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private long id;
    @Basic
    @Column(name = "status")
    private String status;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DoorEn doorEn = (DoorEn) o;
        return id == doorEn.id && Objects.equals(status, doorEn.status);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, status);
    }
}
