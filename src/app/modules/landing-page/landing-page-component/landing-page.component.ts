import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  features = [
    { iconUrl: 'assets/icons/become_member.svg', title: 'Become a member', description: 'Sign up to sell on SellersHub and reach millions of potential customers.' },
    { iconUrl: 'assets/icons/verify_acc.svg', title: 'Upload product', description: 'Click on the verification link sent to you to confirm your registration' },
    { iconUrl: 'assets/icons/start-selling.svg', title: 'Start Selling', description: 'Upload your products and start selling!' }
  ];

  brandDetailsLeft = [
    { iconUrl: 'assets/icons/market-coverage.svg', title: 'Market Coverage', description: 'Because at Ten12 we understand your need to reach a broader consumer base and make' },
    { iconUrl: 'assets/icons/Trade-experience.svg', title: 'Trade experience', description: 'Kaiglo provides a user experience that allows even your most loyal customers to still keep in touch and purchase from you anywhere they are in Nigeria.' },
    { iconUrl: 'assets/icons/easy-of-transaction.svg', title: 'Easy of transaction', description: 'On Ten12, mobile payment is made easy, fast and efficient.' }
  ];

  brandDetailsRight = [
    { iconUrl: 'assets/icons/brand-rec.svg', title: 'Brand recognition', description: 'Do you yearn for a platform where your brand image can be improved and recognized?' },
    { iconUrl: 'assets/icons/market-insight.svg', title: 'Market insight', description: 'Kaiglo ensures that you can monitor your sales annually to know if you are excelling at a particular trade or whether it would be profitable to move to another line of business. This is made possible through our market insights.' },
    { iconUrl: 'assets/icons/efficiency.svg', title: 'Efficiency & trustworthy', description: 'Issue of quality and efficient service delivery is our watch word atTen12.' }
  ];

  showSideDrawer = false;

  constructor() { }

  ngOnInit() {
  }

  renderSideDrawer() {
    this.showSideDrawer = !this.showSideDrawer;
  }
}
