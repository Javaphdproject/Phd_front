package com.PhD_UAE.PhD.Service;

import com.PhD_UAE.PhD.Dto.CandidatureDTO;
import com.PhD_UAE.PhD.Dto.SujetDTO;
import com.PhD_UAE.PhD.Dto.CandidatDTO;
import com.PhD_UAE.PhD.Dto.BourseDTO;
import com.PhD_UAE.PhD.Entity.Bourse;
import com.PhD_UAE.PhD.Entity.Candidature;
import com.PhD_UAE.PhD.Entity.Candidat;
import com.PhD_UAE.PhD.Entity.Sujet;
import com.PhD_UAE.PhD.Repository.BourseRepository;
import com.PhD_UAE.PhD.Repository.CandidatureRepository;
import com.PhD_UAE.PhD.Repository.CandidatRepository;
import com.PhD_UAE.PhD.Repository.SujetRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CandidateService {

    @Autowired
    private CandidatureRepository candidatureRepository;

    @Autowired
    private CandidatRepository candidatRepository;

    @Autowired
    private BourseRepository bourseRepository;

    @Autowired
    private SujetRepository sujetRepository;


    public List<SujetDTO> getAllSujets() {
        List<Sujet> sujets = sujetRepository.findAll(); // Fetch all sujets
        return sujets.stream()
                .map(SujetDTO::new)
                .collect(Collectors.toList());
    }



    public CandidatureDTO getCandidatureById(Long idCandidature) {
        Candidature candidature = candidatureRepository.findCandidatureByIdcandidature(idCandidature);
        if (candidature == null) {
            return null;
        }
        return new CandidatureDTO(candidature);
    }

    public CandidatDTO getCandidatById(Long idCandidat) {
        Candidat candidat = candidatRepository.findCandidatByIdCandidate(idCandidat);
        if (candidat == null) {
            return null;
        }
        return new CandidatDTO(candidat);
    }

    public List<CandidatureDTO> getCandidaturesByCandidateId(Long candidateId) {
        List<Candidature> candidatures = candidatureRepository.findByCandidate_IdCandidate(candidateId);
        return candidatures.stream().map(CandidatureDTO::new).collect(Collectors.toList());
    }


    @Transactional
    public CandidatureDTO updateCandidatureStatus(Long idCandidature, String newStatus) {
        Candidature candidature = candidatureRepository.findCandidatureByIdcandidature(idCandidature);
        if (candidature != null) {
            candidature.setEtatCandidature(newStatus);
            candidatureRepository.save(candidature);
            return new CandidatureDTO(candidature);
        }
        return null;
    }

    @Transactional
    public CandidatDTO updateCandidateProfile(Long idCandidate, CandidatDTO updatedData) {
        Candidat candidat = candidatRepository.findById(idCandidate).orElse(null);
        if (candidat == null) {
            return null;
        }

        // Update fields
        candidat.setDateNaissance(updatedData.getDateNaissance());
        candidat.setAdresse(updatedData.getAdresse());
        candidat.setCin(updatedData.getCin());
        candidat.setCne(updatedData.getCne());
        candidat.setPays(updatedData.getPays());
        candidat.setPhoto(updatedData.getPhoto());
        candidat.setDiplomeObtenu(updatedData.getDiplomeObtenu());
        candidat.setEtablissementPrecedent(updatedData.getEtablissementPrecedent());
        candidat.setFonctionnaire(updatedData.isFonctionnaire());

        candidatRepository.save(candidat);
        return new CandidatDTO(candidat);
    }

    @Transactional
    public BourseDTO addBourse(BourseDTO bourseDTO) {
        // Fetch candidate by ID from the DTO (or use the authenticated user as in the previous example)
        Candidat candidate = candidatRepository.findById(bourseDTO.getIdCandidate()).orElse(null);
        if (candidate == null) {
            return null;
        }

        // Create new Bourse entity
        Bourse bourse = new Bourse();
        bourse.setCandidate(candidate);
        bourse.setDescription(bourseDTO.getDescription());
        bourse.setMontant(bourseDTO.getMontant());
        bourse.setDateDemande(new Date());
        bourse.setEtatDemande("en traitement");
        bourseRepository.save(bourse);

        return new BourseDTO(bourse);
    }

    public List<BourseDTO> getBoursesByCandidateId(Long candidateId) {
        List<Bourse> bourses = bourseRepository.findByCandidate_IdCandidate(candidateId);
        return bourses.stream().map(BourseDTO::new).collect(Collectors.toList());
    }


}
