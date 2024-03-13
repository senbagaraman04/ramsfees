import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { ramsInstructor } from './rams-mock.service';

@Component({
  selector: 'app-rams-teacher',
  templateUrl: './rams-teacher.component.html',
  styleUrl: './rams-teacher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RamsTeacherComponent {
    instructors: ramsInstructor[] = [];

    cols: any[] = [];

  
    @ViewChild('dt') dt: any;

    constructor() { }

    ngOnInit() {
      

      //TODO: Dummy Data move to service call
      this.instructors = [
        {
          address: 'India',
          expertise : ['Music', 'Dance'],
          name: 'Bob',
          phonenumber: '1234567890'
        },
        {
          address: 'India',
          expertise : ['Vocal'],
          name: 'Alice',
          phonenumber: '9234567890'
        }
       
      ]


        this.cols = [
            { field: 'name', header: 'Name'},
            { field: 'address', header: 'Address' },
            { field: 'phonenumber', header: 'Phone' },
            { field: 'expertise', header: 'Expertise' },
            
        ];

      
    }

    
    public doGlobalFilter(text?: any) {
      console.log("global search text: ", text);
      this.dt.filterGlobal(text.target.value, 'contains');
    }

 
}


