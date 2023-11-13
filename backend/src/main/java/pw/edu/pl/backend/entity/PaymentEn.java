package pw.edu.pl.backend.entity;

import jakarta.persistence.*;

import java.util.Objects;

@Entity
@Table(name = "payment")
public class PaymentEn {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "status")
    private String status;
    @Basic
    @Column(name = "method")
    private String method;
    @Basic
    @Column(name = "ammount")
    private Double ammount;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public Double getAmmount() {
        return ammount;
    }

    public void setAmmount(Double ammount) {
        this.ammount = ammount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PaymentEn paymentEn = (PaymentEn) o;
        return id == paymentEn.id && Objects.equals(status, paymentEn.status) && Objects.equals(method, paymentEn.method) && Objects.equals(ammount, paymentEn.ammount);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, status, method, ammount);
    }
}
