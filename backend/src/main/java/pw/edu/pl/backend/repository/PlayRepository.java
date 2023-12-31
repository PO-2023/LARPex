package pw.edu.pl.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pw.edu.pl.backend.entity.PlayEn;

@Repository
public interface PlayRepository extends JpaRepository<PlayEn, Integer> {
    PlayEn findByEventId(Integer eventId);
}
