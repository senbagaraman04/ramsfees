import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
    
 
 

export interface ramsInstructor {
    name : string;
    phonenumber: string;
    address: string;
    expertise: string[];
}