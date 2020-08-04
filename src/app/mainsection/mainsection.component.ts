import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
 
 
@Component({
  selector: 'app-mainsection',
  templateUrl: './mainsection.component.html',
  styleUrls: ['./mainsection.component.scss']
})
export class MainsectionComponent implements OnInit {



  datasrc


	constructor(private apiService: ApiService) 
  { }

  ngOnInit() {
		this.apiService.GetCollection().subscribe((data: any[])=>{  
			console.log(data['artObjects']);  
    	this.datasrc = data['artObjects'];
    
    
		})  
	}

}
