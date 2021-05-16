import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', 'dashboard-mobile.component.css']
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

  avatarGroup = [
    { iconUrl: 'assets/img/store-profile@2x.png', title: 'Saint Morris', content: '2019 New Design light Sneakers Mesh Latest Men Sport Shoes' },
    { iconUrl: 'assets/img/store-profile@2x.png', title: 'Apostle Ben', content: 'Fashion Women PU Leather Messenger Handbag Shoulder B… C' },
    { iconUrl: 'assets/img/store-profile@2x.png', title: 'Eugene Investor', content: 'new ladies mini bucket bag female shoulder slung Bad' },
    { iconUrl: 'assets/img/store-profile@2x.png', title: 'Obai Gang 🤙', content: 'Samsung Galaxy Note 10+ Plus 5G (512GB/12GB, Tel) - Aura …' }
  ];

  salesGroup = [
    { iconUrl: 'assets/img/2 air-max-2090-mens-shoe-3pVM46 (2)@2x.png', title: 'Nike Air Max 2090 - Limited Edition 2021' },
    { iconUrl: 'assets/img/165281f4e0c7a306fdf47cfc4f65fba9@2x.png', title: 'Nike Air Max 2090 - Limited Edition 2021' },
    { iconUrl: 'assets/img/65cd52bb889a6911b46333b4758ace80@2x.png', title: 'Nike Air Max 2090 - Limited Edition 2021' },
    { iconUrl: 'assets/img/16d369bbade7da13eb0cb7c62aad8ea6@2x.png', title: 'Nike Air Max 2090 - Limited Edition 2021' }
  ];

  showSideDrawer = false;

  constructor() { }

  ngOnInit() {
  }

  renderSideDrawer() {
    this.showSideDrawer = !this.showSideDrawer;
  }
}
