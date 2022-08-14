// Angular Imports //
import { Component, OnInit } from '@angular/core';
// Services Imports //
import { JSLOADERService } from 'src/app/Services/JSLOADER/jsloader.service';

@Component({
  selector: 'app-home-es',
  templateUrl: './home-es.component.html',
  styleUrls: ['./home-es.component.scss']
})
export class HomeEsComponent implements OnInit {

  constructor(
     // Services //
     private JSLOAD:JSLOADERService
  ) { 
    JSLOAD.Charge(["home"]);
    JSLOAD.Charge(["scroll"]);
  }

  ngOnInit(): void {
  }
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
  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
  }
}
