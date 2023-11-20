package pw.edu.pl.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pw.edu.pl.backend.entity.EnrollEn;

@Repository
public interface EnrollRepository extends JpaRepository<EnrollEn, Long> {
    EnrollEn findByPaymentId(Long paymentId);

    EnrollEn findByUserId(Long id);
}
