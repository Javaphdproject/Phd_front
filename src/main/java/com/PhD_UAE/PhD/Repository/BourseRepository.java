package com.PhD_UAE.PhD.Repository;

import com.PhD_UAE.PhD.Entity.Bourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BourseRepository extends JpaRepository<Bourse, Long> {
    // Method to find Bourses by candidate ID
    List<Bourse> findByCandidate_IdCandidate(Long candidateId);
}
