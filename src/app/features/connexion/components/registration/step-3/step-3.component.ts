import { Component, OnInit } from '@angular/core';
import { CheckboxService } from '../../../services/checkbox.service';

@Component({
  selector: 'app-step-3',
  templateUrl: './step-3.component.html',
  styleUrls: ['./step-3.component.scss'],
})
export class Step3Component implements OnInit {
  checkboxRows!: { label: string }[][];
  constructor(private checkboxService: CheckboxService) {}

  ngOnInit(): void {
    this.checkboxRows = this.checkboxService.checkboxRows;
  }
}
