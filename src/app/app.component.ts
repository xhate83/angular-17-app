import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

export interface Object {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular17';
  condition = true;
  arrayObjects: Object[]  = [
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'},
    {id: 3, name: 'item3'},
    {id: 4, name: 'item4'},
    {id: 5, name: 'item5'}
  ];

  trackByFn(item: any): number {
    return item.id
  }
}
