import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input()
  public name!: string;

  @ViewChild('addCardInput')
  addCardInputElement!: ElementRef<HTMLInputElement>;

  public isEditMode = false;

  public setEditMode(edit: boolean): void {
    this.isEditMode = edit;
    if (edit) {
      setTimeout(() => {
        // this will make the execution after the above boolean has changed
        this.addCardInputElement.nativeElement.focus();
      }, 0);
    }
  }
}
