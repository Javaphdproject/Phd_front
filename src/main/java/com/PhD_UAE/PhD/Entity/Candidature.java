package com.PhD_UAE.PhD.Entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
@Data
@Getter
@Setter
@Entity
public class Candidature {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idcandidature;
    private boolean dossierComplet;
    private String etatCandidature;

    @OneToOne
    @JoinColumn(name = "idCandidate", referencedColumnName = "idCandidate")
    private Candidat candidate; // Change this line to use Candidate entity

    @OneToOne
    @JoinColumn(name = "idSujet", referencedColumnName = "idSujet")
    private Sujet sujet; // Change this line to use Candidate entity

    // Update the mapping here
    @OneToMany(mappedBy = "candidature")
    private List<Candidat> candidats;

    public Candidature() {}
}
