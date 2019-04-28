import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { StudentInfoComponent } from './student-info/student-info.component';
import { ParentInfoComponent } from './parent-info/parent-info.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicComponents01';

  // data is defined
  data = [
    {
      "Id": 1,
      "Name": "Student Info"
    },
    {
      "Id": 2,
      "Name": "Parent Info"
    }
  ];

// componentRef is 
  componentRef: any;


  @ViewChild('loadComponent', { read: ViewContainerRef }) entry: ViewContainerRef ;

  constructor (
    private resolver: ComponentFactoryResolver
    ){}


  // seclecName() method is defined
  selectName (Id: number) {
    this.createComponent( Id );

  }

  // createComponent() method is defined
  createComponent ( Id: number ) {

    this.entry.clear();
    if( Id == 1 ) { 
     const factory =  this.resolver.resolveComponentFactory( StudentInfoComponent );
     this.componentRef = this.entry.createComponent( factory );

    }
    else if ( Id == 2 ) {
      const factory = this.resolver.resolveComponentFactory( ParentInfoComponent );
      this.componentRef = this.entry.createComponent( factory );
    }

    this.componentRef.instance.message = " Called By AppComponent ";

  }


  //destroyComponent() method is defined
  destroyComponent ( ) {
    this.componentRef.destroy( );
  }


 

  
}
