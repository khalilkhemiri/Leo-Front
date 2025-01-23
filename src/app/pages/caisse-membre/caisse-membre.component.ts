import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caisse-membre',
  templateUrl: './caisse-membre.component.html',
  styleUrls: ['./caisse-membre.component.scss']
})
export class CaisseMembreComponent implements OnInit {
  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      libelle: ['', Validators.required],
      montant: [0, [Validators.required, Validators.min(1)]],
      type_transaction: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const transactionData = this.transactionForm.value;

      // Appel API pour ajouter une transaction
      this.http
        .post('http://192.168.2.1:8080/ajouter_transaction_caisse_membre', transactionData)
        .subscribe(
          (response) => {
            console.log(response);  // Afficher la réponse de succès
            alert('Transaction enregistrée avec succès');
            this.transactionForm.reset();  // Réinitialiser le formulaire
          },
          (error) => {
            console.error('Erreur:', error);
            alert('Erreur lors de l\'ajout de la transaction');
          }
        );
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}