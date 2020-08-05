import { Component } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'museumsurfingapp';
 // searchphrase
 currentFraze;


  addSearch(searchphrase) {
    //this.attendees = [...this.attendees, attendee];
  
   // const obj={ searchphrase}

    //const { searchhword } = obj;
   // const { searchword }: { searchword: string } = searchphrase;


   this.currentFraze=searchphrase.searchword
    

    console.log('APP here',this.currentFraze);
  }
}



