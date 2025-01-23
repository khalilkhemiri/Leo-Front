import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cotisation',
  templateUrl: './cotisation.component.html',
  styleUrls: ['./cotisation.component.scss']
})
export class CotisationComponent implements OnInit {
  cotisationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient  // Injecter HttpClient
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire réactif
    this.cotisationForm = this.fb.group({
      nom: ['', Validators.required],
      montant: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit(): void {
    if (this.cotisationForm.valid) {
      const cotisationData = this.cotisationForm.value;
    
      // Appel de l'API avec HttpClient directement dans le composant
      this.http.post('http://192.168.2.1:8080/ajouter_cotisation', cotisationData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .subscribe(
        response => {
          console.log(response);  
          alert('Cotisation ajoutée avec succès');
          this.cotisationForm.reset();  
        },
        error => {
          console.error('Erreur:', error);
          alert('Erreur lors de l\'ajout de la cotisation');
        }
      );
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
    
}}