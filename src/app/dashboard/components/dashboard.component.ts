import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardChildComponent } from './dashboard-child/dashboard-child.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, DashboardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  text = 'Dashboard';
  private _changeDetectorRef = inject(ChangeDetectorRef)

  handlerClick(): void {
    this.text = `Dashboard cambia el texto`;
    this._changeDetectorRef.markForCheck();
  }
}
