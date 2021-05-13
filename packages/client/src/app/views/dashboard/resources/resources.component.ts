import { Component } from '@angular/core';
import { buildingList } from '@/utils/building-list';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent {
  public buildingList = buildingList;
}
