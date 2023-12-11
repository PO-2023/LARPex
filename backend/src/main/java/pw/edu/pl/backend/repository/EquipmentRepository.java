package pw.edu.pl.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pw.edu.pl.backend.entity.EquipmentEn;

@Repository
public interface EquipmentRepository extends JpaRepository<EquipmentEn, Long> {
}
