import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() bColor = '#d9d9d9';
  @Input() pColor = '#4CAF50';
  @Input() width = 50;

  constructor() { }

  ngOnInit() {
  }

}
