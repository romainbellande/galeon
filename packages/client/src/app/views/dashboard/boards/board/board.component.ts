import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

interface Card {
  id: string;
  name: string;
}

interface List {
  id: string;
  name: string;
  cards: Card[];
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  public lists: List[] = [
    {
      id: 'd79af7c3-c5b9-473b-96fd-2d03f1324095',
      name: 'todo',
      cards: [
        {
          id: '2eb1548c-2891-49ef-b3ed-4d1ba11bb64f',
          name: 'Review',
        },
        {
          id: 'b0769987-aada-4979-8c2c-42cf645d272f',
          name: 'Check this',
        },
      ],
    },
    {
      id: 'e40521ae-c81d-47ae-a3fe-ca03393db910',
      name: 'doing',
      cards: [
        {
          id: '51a4ca37-3950-464b-ab35-2dba07fe68be',
          name: 'Test',
        },
        {
          id: '541b382c-0bf4-40b2-a575-d7b04069902f',
          name: 'Ok',
        },
      ],
    },
  ];

  public drop(event: CdkDragDrop<Card[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  public getConnectedListsWithout(list: List): string[] {
    return this.lists
      .filter((item) => item.id !== list.id)
      .map((item) => `list-${item.id}`);
  }
}
