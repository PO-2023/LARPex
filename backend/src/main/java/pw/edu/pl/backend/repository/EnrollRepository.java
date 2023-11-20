package pw.edu.pl.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pw.edu.pl.backend.entity.EnrollEn;

@Repository
public interface EnrollRepository extends JpaRepository<EnrollEn, Integer> {
    EnrollEn findByPaymentId(Integer paymentId);

    EnrollEn findByUserId(Long id);
}
