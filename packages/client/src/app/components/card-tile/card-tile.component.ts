import { Component } from '@angular/core';

@Component({
  selector: 'app-card-tile',
  templateUrl: './card-tile.component.html',
  styleUrls: ['./card-tile.component.scss'],
})
export class CardTileComponent {
  public isMenuOpen = false;

  public setIsMenuOpen(isOpen: boolean): void {
    this.isMenuOpen = isOpen;
  }
}
