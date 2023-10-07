import { Component, Input, OnInit } from '@angular/core';
import { Cube } from '../streak/cube.interface';

@Component({
  selector: 'app-streak-popover',
  templateUrl: './streak-popover.component.html',
  styleUrls: ['./streak-popover.component.scss'],
})
export class StreakPopoverComponent  implements OnInit {
  @Input() cube: Cube = {title: '', isActive: false};
  constructor() { }

  ngOnInit() {}

}
