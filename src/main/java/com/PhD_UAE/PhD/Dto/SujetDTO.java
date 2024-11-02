package com.PhD_UAE.PhD.Dto;

import com.PhD_UAE.PhD.Entity.Sujet;
import lombok.Data;

@Data
public class SujetDTO {
    private Long idSujet;
    private String titre;
    private String projet;
    private String description;

    // Constructor to convert from entity to DTO
    public SujetDTO(Sujet sujet) {
        this.idSujet = sujet.getIdSujet();
        this.titre = sujet.getTitre();
        this.projet = sujet.getProjet();
        this.description = sujet.getDescription();
    }
}
