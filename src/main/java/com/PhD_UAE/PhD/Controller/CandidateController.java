package com.PhD_UAE.PhD.Controller;

import com.PhD_UAE.PhD.Dto.CandidatureDTO;
import com.PhD_UAE.PhD.Dto.CandidatDTO;
import com.PhD_UAE.PhD.Dto.BourseDTO;
import com.PhD_UAE.PhD.Dto.SujetDTO;
import com.PhD_UAE.PhD.Service.CandidateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/phd/auth/users/candidate")
public class CandidateController {

    @Autowired
    private CandidateService candidateService;


     //show all scolarships dyal candidate
    @GetMapping("/get-bourses/{idCandidat}")
    public ResponseEntity<List<BourseDTO>> getBoursesByCandidateId(@PathVariable Long idCandidat) {
        List<BourseDTO> bourses = candidateService.getBoursesByCandidateId(idCandidat);
        return new ResponseEntity<>(bourses, HttpStatus.OK);
    }
    // Get details about a specific candidature
    @GetMapping("/get-candidature/details/{idCandidature}")
    public ResponseEntity<CandidatureDTO> getCandidatureById(@PathVariable Long idCandidature) {
        CandidatureDTO candidature = candidateService.getCandidatureById(idCandidature);
        if (candidature == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(candidature, HttpStatus.OK);
    }

    // Get all candidatures of the candidate
    @GetMapping("/get-candidature/candidate/{idCandidate}")
    public ResponseEntity<List<CandidatureDTO>> getCandidaturesByCandidateId(@PathVariable Long idCandidate) {
        List<CandidatureDTO> candidatures = candidateService.getCandidaturesByCandidateId(idCandidate);
        if (candidatures.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(candidatures, HttpStatus.OK);
    }

    //show all sujets available
    @GetMapping("/get-all-sujets") // New endpoint
    public ResponseEntity<List<SujetDTO>> getAllSujets() {
        List<SujetDTO> sujets = candidateService.getAllSujets();
        return new ResponseEntity<>(sujets, HttpStatus.OK);
    }





    //still working
    @PostMapping("/add-bourse")
    public ResponseEntity<String> addBourse(@RequestBody BourseDTO bourseDTO) {
        BourseDTO createdBourse = candidateService.addBourse(bourseDTO);
        if (createdBourse == null) {
            return new ResponseEntity<>("Candidate not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Bourse added successfully", HttpStatus.CREATED);
    }

    //show info of candidate i will need it in profil info   Still working on it
    @GetMapping("/get-candidat/{idCandidat}")
    public ResponseEntity<CandidatDTO> getCandidatById(@PathVariable Long idCandidat) {
        CandidatDTO candidat = candidateService.getCandidatById(idCandidat);
        if (candidat == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(candidat, HttpStatus.OK);
    }

    // Endpoint to update candidate profile    still working on it
    @PutMapping("/update-profile/{idCandidate}")
    public ResponseEntity<CandidatDTO> updateCandidateProfile(@PathVariable Long idCandidate, @RequestBody CandidatDTO updateData) {
        CandidatDTO updatedCandidate = candidateService.updateCandidateProfile(idCandidate, updateData);
        if (updatedCandidate == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(updatedCandidate, HttpStatus.OK);
    }


    /*
    @PutMapping("/update-candidature-status/{idCandidature}/{newStatus}")
    public ResponseEntity<String> updateCandidatureStatus(@PathVariable Long idCandidature, @PathVariable String newStatus) {
        CandidatureDTO candidature = candidateService.updateCandidatureStatus(idCandidature, newStatus);
        if (candidature == null) {
            return new ResponseEntity<>("Candidature not found", HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>("Candidature status updated successfully", HttpStatus.OK);
    }
    */
}
