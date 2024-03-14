import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { dummyInstructorData, ramsInstructor } from '../../rams-mock.service';
import { teacherColumn } from './rams-teacher.column';

@Component({
  selector: 'app-rams-teacher',
  templateUrl: './rams-teacher.component.html',
  styleUrl: './rams-teacher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RamsTeacherComponent {
  instructors: ramsInstructor[] = [];

  cols: any[] = [];
  showDialog = false;

  @ViewChild('dt') dt: any;

  constructor() { }

  ngOnInit() {
    //TODO: Dummy Data move to service call
    this.instructors = dummyInstructorData;

    this.cols = teacherColumn;

  }


  public doGlobalFilter(text?: any) {
    console.log("global search text: ", text);
    this.dt.filterGlobal(text.target.value, 'contains');
  }

  onAddNewClick() {
    this.showDialog = true;
  }


}


