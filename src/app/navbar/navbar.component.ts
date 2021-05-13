import { SlideInOutAnimation } from './animation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [SlideInOutAnimation]
})
export class NavbarComponent implements OnInit {

  navbar_mobile_active: boolean = false;
  animationState = 'out';
  topButton: boolean = false;
  constructor() { }

  ngOnInit(): void {

    window.addEventListener('scroll', this.onScroll, true);
  }

  onScroll = (event): void => {

    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
      this.topButton = true;
    }
    else {
      this.topButton = false;
    }

  }

  toggleShowDiv(divName: string) {
    if (divName === 'navbar-mobile') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }

  toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  toHome() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toAboutUs() {
    document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
  }

  toContactUs() {
    document.getElementById("contact-us").scrollIntoView({ behavior: "smooth" });
  }

  toJobApplication() {
    document.getElementById("job-application").scrollIntoView({ behavior: "smooth" });
  }

  toHomeMobile(mobileNavButton: HTMLButtonElement) {
    mobileNavButton.click();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toAboutUsMobile(mobileNavButton: HTMLButtonElement) {
    mobileNavButton.click();
    setTimeout(() => {
      document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
    },915);
  }

  toContactUsMobile(mobileNavButton: HTMLButtonElement) {
    mobileNavButton.click();
    setTimeout(() => {
      document.getElementById("contact-us").scrollIntoView({ behavior: "smooth" });
    },915);
  
  }

  toJobApplicationMobile(mobileNavButton: HTMLButtonElement) {
    mobileNavButton.click();
    setTimeout(() => {
      document.getElementById("job-application").scrollIntoView({ behavior: "smooth" });
    },915);
  }
}
