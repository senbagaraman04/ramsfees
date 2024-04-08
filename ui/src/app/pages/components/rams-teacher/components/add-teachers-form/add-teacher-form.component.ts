import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-teacher-form',  
  templateUrl: './add-teacher-form.component.html',
  styleUrl: './add-teacher-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTeacherFormComponent { 

  teacherForm = this.fb.group({
    firstName: ['', Validators.required], 
     address: this.fb.group({ // <- another group of element
      street: [''],
      phone: ['', Validators.required],
      expertise: ['', Validators.required]
    })
  });

  constructor(private fb: FormBuilder) { };


  addUser() {
    console.log(this.teacherForm.value);
  }
}
