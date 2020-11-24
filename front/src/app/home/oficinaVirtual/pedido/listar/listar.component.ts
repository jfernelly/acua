import { Component, OnInit } from '@angular/core';
import { ScriptManagerService } from 'src/app/script-manager.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private scriptManager: ScriptManagerService) { }

  ngOnInit(): void {
    this.scriptManager.cargarScript(['accordion']);
  }
  

}
