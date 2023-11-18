import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  project!: paper.Project

  constructor() { }

  setPaperProject = (project: paper.Project) => {
    this.project = project;
  }

  getPaperProject = () => {
    return this.project;
  }

}
