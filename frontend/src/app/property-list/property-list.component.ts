import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent {
  propertyList = [{
    name: 'p1',
    price: 123,
    title: 'sale'
  },
  {
    name: 'p1',
    price: 123,
    title: 'sale'
  },
  {
    name: 'p1',
    price: 123,
    title: 'sale'
  }
  ]
}
