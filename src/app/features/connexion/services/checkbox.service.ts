import { Injectable } from '@angular/core';

@Injectable()
export class CheckboxService {
  checkboxRows = [
    [{ label: 'Sciences' }, { label: 'Photography' }, { label: 'Cooking' }],
    [{ label: 'Music' }, { label: 'DIY' }, { label: 'Sport' }],
    [{ label: 'Reading' }, { label: 'Paint' }, { label: 'Theater' }],
    [{ label: 'Games' }, { label: 'Travel' }, { label: 'Fashion' }],
  ];
}
