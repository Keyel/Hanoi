import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TowerComponent } from "./components/tower/tower.component";
import * as paper from 'paper';
import { Project } from 'paper/dist/paper-core';
import { PaperService } from './services/paper.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, TowerComponent]
})
export class AppComponent implements OnInit {
  title = 'hanoi';

  constructor(private paperService: PaperService)
  {

  }

  ngOnInit(): void {
    window['paper'] = paper;
    const project = new Project('canvas')
    this.paperService.setPaperProject(project);
  }  
}
