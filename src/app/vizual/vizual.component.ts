import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vizual',
  templateUrl: './vizual.component.html',
  styleUrls: ['./vizual.component.css']
})
export class VizualComponent implements OnInit {

  images = [
    { img: '../assets/images/1.jpg' },
    { img: '../assets/images/2.jpg' },
    { img: '../assets/images/3.jpg' },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    infinite: true
  };

  constructor() { }

  ngOnInit(): void {
  }

}
