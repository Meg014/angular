import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})

export class SobreComponent implements OnInit {


  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {}



}
