import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  clickMessage

  constructor() { }
//searchPhrase(newPhrase.value)
searchPhrase(newPhrase: string) { 

  console.log(newPhrase)
    
     
  }
    

  ngOnInit(): void {
  }

}
