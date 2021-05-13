import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

interface SidenavRoute {
  name: string;
  path: string;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav: SidenavRoute[] = [
    {
      name: 'Home',
      path: '',
    },
    {
      name: 'Tasks',
      path: '/boards',
    },
    {
      name: 'Resources',
      path: '/resources',
    },
    {
      name: 'Facilities',
      path: '/facilities',
    },
    {
      name: 'Research',
      path: '/research',
    },
    {
      name: 'Shipyard',
      path: '/shipyard',
    },
    {
      name: 'Defence',
      path: '/defence',
    },
    {
      name: 'Fleet',
      path: '/fleet',
    },
  ];

  private _mobileQueryListener: () => void;
  private maxWidth = 600;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia(`(max-width: ${this.maxWidth}px)`);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
