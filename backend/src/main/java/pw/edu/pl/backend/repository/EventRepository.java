package pw.edu.pl.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pw.edu.pl.backend.entity.EventEn;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<EventEn, Long> {

    List<EventEn> findByStartTimeAfterAndEndTimeBefore(LocalDateTime dateTimeFrom, LocalDateTime dateTimeTo);
}
