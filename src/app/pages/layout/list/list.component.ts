import { Component } from '@angular/core';
import { fruits } from './fruits-list';

@Component({
  selector: 'ngx-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss'],
})
export class ListComponent {
  fruits = fruits;

  users: { name: string, title: string }[] = [
    { name: 'Carla Espinosa', title: 'Nurse' },
    { name: 'Bob Kelso', title: 'Doctor of Medicine' },
    { name: 'Janitor', title: 'Janitor' },
    { name: 'Perry Cox', title: 'Doctor of Medicine' },
    { name: 'Ben Sullivan', title: 'Carpenter and photographer' },
  ];


  establishments = [
    {
      name: 'Faculté des Sciences',
      // subjects: ['Mathématiques', 'Physique', 'Chimie', 'Informatique', 'Biologie'],
    },
    {
      name: 'Faculté des Lettres et des Sciences Humaines',
      // subjects: ['Littérature Française', 'Histoire', 'Psychologie', 'Sociologie', 'Philosophie'],
    },
    {
      name: 'Faculté des Sciences Juridiques, Économiques et Sociales',
      // subjects: ['Droit Public', 'Droit Privé', 'Économie Appliquée', 'Gestion des Entreprises', 'Administration Publique'],
    },
    {
      name: 'École Supérieure de Technologie (EST)',
      // subjects: ['Génie Informatique', 'Génie Électrique', 'Génie Mécanique', 'Techniques de Gestion', 'Réseaux et Systèmes'],
    },
    {
      name: 'Faculté de Médecine et de Pharmacie',
      // subjects: ['Médecine Générale', 'Pharmacie', 'Biologie Médicale', 'Santé Publique', 'Médecine Dentaire'],
    },
    // Add more establishments as needed
  ];
}
