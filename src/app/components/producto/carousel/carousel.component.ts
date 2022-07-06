import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-prod',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselProdComponent implements OnInit {
  @Input('producto') prod: any;
  constructor() {}

  ngOnInit(): void {}
}
