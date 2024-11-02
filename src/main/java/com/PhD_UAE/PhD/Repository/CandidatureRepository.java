package com.PhD_UAE.PhD.Repository;

import com.PhD_UAE.PhD.Entity.Candidature;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CandidatureRepository extends JpaRepository<Candidature, Integer> {
    Candidature findCandidatureByIdcandidature(Long idCandidature);

    // find all candidatures by the candidate's ID
    List<Candidature> findByCandidate_IdCandidate(Long candidateId);
}
