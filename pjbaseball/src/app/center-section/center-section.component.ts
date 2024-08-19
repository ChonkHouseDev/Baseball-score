import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-center-section',
  standalone: true, 
  templateUrl: './center-section.component.html',
  styleUrls: ['./center-section.component.css']
})
export class CenterSectionComponent {
  @Input() playerImage: string = 'assets/image.png'; // Ruta de la imagen
  @Input() playerName: string = 'Chris Carter';

  receivedData: string = '';

  onDataReceived(data: string) {
    // Aquí puedes manejar los datos recibidos como desees
  }
}
