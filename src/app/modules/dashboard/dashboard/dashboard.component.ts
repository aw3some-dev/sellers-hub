import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidebarItems = [
    { iconUrl: 'assets/svg/icon - home.svg', title: 'Dashboard' },
    { iconUrl: 'assets/svg/icon - products.svg', title: 'Add Product' },
    { iconUrl: 'assets/svg/icon - order.svg', title: 'Orders' },
    { iconUrl: 'assets/svg/icon - products.svg', title: 'Manage Products' },
    { iconUrl: 'assets/svg/icon - coupon.svg', title: 'Coupon' },
    { iconUrl: 'assets/svg/icon - advertise.svg', title: 'Advertise' },
    { iconUrl: 'assets/svg/icon - settings.svg', title: 'Settings' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
