import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
    
 
 

export interface ramsInstructor {
    name : string;
    phonenumber: string;
    address: string;
    expertise: string[];
}

export const dummyInstructorData = [
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

];