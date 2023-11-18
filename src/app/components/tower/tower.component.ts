import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as paper from 'paper';
import { Path, Point, Project } from 'paper/dist/paper-core';
import { PaperService } from '../../services/paper.service';

const TOWER_BASE = 280
const TOWER_WIDTH = 15
const DISK_HEIGHT = 25
const DISK_NUMBER = 7

const BLACK: paper.Color = new paper.Color(0,0,0);

@Component({
  selector: 'tower',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tower.component.html',
//   styleUrl: './tower.component.css'
})
export class TowerComponent implements OnInit {
    @Input() Order: number = 1;
    
    path!: paper.Path.Rectangle    

    constructor(private paperService: PaperService) {
  
    }
        
    ngOnInit(): void {
        this.init()
    }

    init = () => {
        const project = this.paperService.getPaperProject();

        this.path = new Path.Rectangle(
            new paper.Point(100 + this.Order * 100 - TOWER_WIDTH / 2, TOWER_BASE), 
            new paper.Size(TOWER_WIDTH, (-1) * DISK_HEIGHT * (DISK_NUMBER + 1)));

        this.draw();
    }

    draw = () => {
        this.path.strokeColor = BLACK;
        this.path.fillColor = BLACK;
    }    
        
}
