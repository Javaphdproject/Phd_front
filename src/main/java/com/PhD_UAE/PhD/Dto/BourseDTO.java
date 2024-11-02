package com.PhD_UAE.PhD.Dto;

import com.PhD_UAE.PhD.Entity.Bourse;
import lombok.Data;

import java.util.Date;

@Data
public class BourseDTO {
    private Long idBourse;
    private Date dateDemande;
    private String etatDemande;
    private String description;
    private Double montant;
    private Long idCandidate;

    // Constructor that accepts a Bourse entity
    public BourseDTO(Bourse bourse) {
        this.idBourse = bourse.getIdBourse();
        this.dateDemande = bourse.getDateDemande();
        this.etatDemande = bourse.getEtatDemande();
        this.description = bourse.getDescription();
        this.montant = bourse.getMontant();
        this.idCandidate = bourse.getCandidate().getIdCandidate(); // Ensure this is not null
    }
}
