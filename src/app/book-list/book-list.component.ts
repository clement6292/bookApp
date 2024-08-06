import { Component } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})



export class BookListComponent {
  
title='Mon livre'
name:string ='Live'
books=[
  {id:1,title:"Zero bogue",author:"Bravo",statut:"En attente"},
  {id:2,title:"Clear code",author:"Charlie",statut:"Terminé"},
  {id:3,title:"Zero bogue",author:"Romeo",statut:"En attente"},
  {id:3,title:"Zero erreur",author:"Zulu",statut:"Terminé"}
]
}
