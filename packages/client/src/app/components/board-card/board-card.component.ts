import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-board-card',
  templateUrl: './board-card.component.html',
  styleUrls: ['./board-card.component.scss'],
})
export class BoardCardComponent {
  @Input()
  name!: string;

  @Input()
  to!: string;

  constructor(private router: Router, private route: ActivatedRoute) {}

  public redirect(): void {
    void this.router.navigate([this.to], { relativeTo: this.route });
  }
}
