import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-action',
  templateUrl: './transaction-action.component.html',
  styleUrls: ['./transaction-action.component.scss']
})
export class TransactionActionComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      action: ['', Validators.required],
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
        .post('https://leo-backend-94kg.onrender.com/ajouter_transaction', transactionData)
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