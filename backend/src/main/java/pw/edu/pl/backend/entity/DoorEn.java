package pw.edu.pl.backend.entity;

import jakarta.persistence.*;
import pw.edu.pl.backend.model.DoorStatus;

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
    private DoorStatus status;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public DoorStatus getStatus() {
        return status;
    }

    public void setStatus(DoorStatus status) {
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
