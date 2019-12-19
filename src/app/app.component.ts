import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedfeathure :string='recipe';
 
  
  OnNavigate(selectedFeature:string)
  {
    this.loadedfeathure= selectedFeature;
     
  }
  ngOnInt()
  {
   
  }
}
