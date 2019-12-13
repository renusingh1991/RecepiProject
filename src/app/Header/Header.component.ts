import { Component ,EventEmitter,Output} from '@angular/core';


@Component(
    {
        selector:'app-header',
        templateUrl: './Header.component.html',
        styleUrls: ['./Header.component.css']
    }
    
)

export class HeaderComponent
{
   @Output() featherEmmited = new EventEmitter<string>();
    collapsed = true;


    Onselect (feactherSelected : string)
    {
        this.featherEmmited.emit(feactherSelected);
    }
}