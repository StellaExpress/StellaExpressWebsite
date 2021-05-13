import { AotSummaryResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toContactUs() {
    document.getElementById("contact-us").scrollIntoView({ behavior: "smooth" });
  }

  toJobApplication() {
    document.getElementById("job-application").scrollIntoView({ behavior: "smooth" });
  }

}
