import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-sidedrawer',
  templateUrl: './dashboard-sidedrawer.component.html',
  styleUrls: ['./dashboard-sidedrawer.component.css']
})
export class DashboardSidedrawerComponent implements OnInit {

  @Input() sidebarItems = [];

  @Output() sideDrawerClosed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    
  }

  closeSideDrawer() {
    this.sideDrawerClosed.emit(true);
  }

}
