package com.PhD_UAE.PhD.Dto;

import com.PhD_UAE.PhD.Entity.Candidat;
import lombok.Data;

import java.util.Date;


@Data
public class CandidatDTO {
    private Long idCandidate;
    private Long idUser;
    private Date dateNaissance;
    private String adresse;
    private String cin;
    private String cne;
    private String pays;
    private String photo;
    private String diplomeObtenu;
    private String etablissementPrecedent;
    private boolean fonctionnaire;
    private int idEntretien;
    private Long idBourse;
    private int idRendezVous;
    private int idSujet;

    public CandidatDTO(Candidat candidat) {
        this.idCandidate = candidat.getIdCandidate();
        this.dateNaissance = candidat.getDateNaissance();
        this.adresse = candidat.getAdresse();
        this.cin = candidat.getCin();
        this.cne = candidat.getCne();
        this.pays = candidat.getPays();
        this.photo = candidat.getPhoto();
        this.diplomeObtenu = candidat.getDiplomeObtenu();
        this.etablissementPrecedent = candidat.getEtablissementPrecedent();
        this.fonctionnaire = candidat.isFonctionnaire();
    }

}
