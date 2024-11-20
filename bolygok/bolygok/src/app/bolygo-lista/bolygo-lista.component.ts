import { Component, OnInit } from '@angular/core';
import { bolygoService } from '../bolygo.service';



@Component({
  selector: 'app-bolygo-lista',
  templateUrl: './bolygo-lista.component.html',
  styleUrl: './bolygo-lista.component.css'
})
export class BolygoListaComponent implements OnInit {

  planet: any[] = [];
  newplanet = { nev: '', hanyadik: 0, halmazallapot: '' };
  constructor(private bolygoService: bolygoService) { }
  ngOnInit(): void {
    this.loadbolygo();
  }
  loadbolygo(): void {
    this.bolygoService.getplanet().subscribe(data => {
      this.planet = data;
    });
  }
  addbolygo(): void {
    this.bolygoService.addUser(this.newplanet).subscribe(planet => {
      this.planet.push(planet);
      this.newplanet = { nev: '', hanyadik: 0, halmazallapot: '' };
    });
  }
}
