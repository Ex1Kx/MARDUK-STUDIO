// Angular Imports //
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent} from 'rxjs';

// Interface Languages //
interface Languages{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Languages Values //
  langs: Languages[] = [
    {value: 'en-0', viewValue: 'English'},
    {value: 'es-1', viewValue: 'Español'},
  ];
  // Sticky Menu //
  enableSticky=false;
  // Responsive Menu //
  isMenuOpen = false;

  constructor(
    // Services //
    @Inject(DOCUMENT)
    private document:Document
  ) 
  {

  }
  ngOnInit(): void {
    // Navbar Section //
    fromEvent(window, "scroll").pipe().subscribe((event)=>{
      if(this.document.defaultView!.scrollY>5)
      {
        this.enableSticky=true;
      }
      else
      {
        this.enableSticky=false;
      }
    });
  }
  // Smooth Scroll Section //
  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
  }
  toAbout(){
    document.getElementById("about")?.scrollIntoView({behavior: "smooth"});
  }
  toProjects(){
    document.getElementById("projects")?.scrollIntoView({behavior: "smooth"});
  }
  toTeam(){
    document.getElementById("team")?.scrollIntoView({behavior: "smooth"});
  }
  toAccount(){
    document.getElementById("account")?.scrollIntoView({behavior: "smooth"});
  }
  // Responsive Menu //
  menuVariable:boolean = false;
}
