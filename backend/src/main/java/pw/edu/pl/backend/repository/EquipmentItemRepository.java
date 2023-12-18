package pw.edu.pl.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pw.edu.pl.backend.entity.EquipmentItemEn;

import java.util.List;

//@Repository
public interface EquipmentItemRepository extends JpaRepository<EquipmentItemEn, Long> {
    List<EquipmentItemEn> findByEquipmentId(long id);
    List<EquipmentItemEn> findByEquipmentIdAndItemId(long equipmentId,long itemId);

}
