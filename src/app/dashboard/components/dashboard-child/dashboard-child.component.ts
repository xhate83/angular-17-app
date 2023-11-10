import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-child',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush, 
  imports: [CommonModule],
  templateUrl: './dashboard-child.component.html',
  styleUrls: ['./dashboard-child.component.scss']
})
export class DashboardChildComponent implements OnInit {
  @Input() text: string = '';
  @Output() textChange = new EventEmitter<string>();

  ngOnChanges(): void {
    console.log('Se cambio el dashboard child')
  }

  ngOnInit(): void {
    console.log('se inicializo el dashboard-child');
    console.log(this.text);
  }

  handleClick(): void {
    this.text = 'Hijo cambia el texto';
    this.textChange.emit(this.text);
  }
}
