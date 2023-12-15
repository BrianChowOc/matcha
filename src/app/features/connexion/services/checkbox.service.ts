import { Injectable } from '@angular/core';

@Injectable()
export class CheckboxService {
  checkboxRows = [
    [{ label: 'Sciences' }, { label: 'Photography' }, { label: 'Cooking' }],
    [{ label: 'Music' }, { label: 'DIY' }, { label: 'Sport' }],
    [{ label: 'Reading' }, { label: 'Paint' }, { label: 'Movie theater' }],
    [{ label: 'Video games' }, { label: 'Travel' }, { label: 'Fashion' }],
  ];
}
