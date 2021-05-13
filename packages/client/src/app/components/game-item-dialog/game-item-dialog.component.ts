import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { buildingsFormulas } from '@/utils/formulas/buildings.formulas';
import { Building } from '@/utils/enums/building.enum';
import { Resource } from '@/utils/enums/resource.enum';

interface GameItemDialogData {
  name: Building;
  level: number;
}

interface UpgradeCostElement {
  name: Resource;
  amount: number;
}

@Component({
  selector: 'app-game-item-dialog',
  templateUrl: './game-item-dialog.component.html',
  styleUrls: ['./game-item-dialog.component.scss'],
})
export class GameItemDialogComponent {
  public displayedColumns: string[] = ['name', 'amount'];
  public upgradeCostElements: UpgradeCostElement[];

  constructor(
    public dialogRef: MatDialogRef<GameItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: GameItemDialogData
  ) {
    this.upgradeCostElements = buildingsFormulas[data.name].cost(
      data.level + 1
    );
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  public onImprove(): void {
    this.dialogRef.close();
  }
}
