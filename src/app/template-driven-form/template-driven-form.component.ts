import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  nom!: string;
  prenom!: string;
  email!: string;
  typeCarte!: string;
  numeroCarte!: string;
  date!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
