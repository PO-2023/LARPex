package pw.edu.pl.backend.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "enroll")
public class EnrollEn {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private Long id;
    @Basic
    @Column(name = "user_id")
    private Long userId;
    @Basic
    @Column(name = "event_id")
    private Long eventId;
    @Basic
    @Column(name = "payment_id")
    private Long paymentId;
    @Basic
    @Column(name = "payment_status")
    private String paymentStatus;

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

    public Long getEventId() {
        return eventId;
    }

    public void setEventId(Long eventId) {
        this.eventId = eventId;
    }

    public Long getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Long paymentId) {
        this.paymentId = paymentId;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        EnrollEn enrollEn = (EnrollEn) o;
        return id == enrollEn.id && Objects.equals(userId, enrollEn.userId) && Objects.equals(eventId, enrollEn.eventId) && Objects.equals(paymentId, enrollEn.paymentId) && Objects.equals(paymentStatus, enrollEn.paymentStatus);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, userId, eventId, paymentId, paymentStatus);
    }
}
