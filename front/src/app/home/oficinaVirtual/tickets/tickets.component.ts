import { Component, OnInit } from '@angular/core';
import { ScriptManagerService } from 'src/app/script-manager.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],
})
export class TicketsComponent implements OnInit {
  constructor(private scriptManager: ScriptManagerService) {}

  ngOnInit(): void {
    this.scriptManager.cargarScript(['accordion']);
  }
}
