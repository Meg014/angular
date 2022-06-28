import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-curiosidade',
  templateUrl: './curiosidade.component.html',
  styleUrls: ['./curiosidade.component.css'],
})

export class CuriosidadeComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() 
  {
  
  }



  
}
