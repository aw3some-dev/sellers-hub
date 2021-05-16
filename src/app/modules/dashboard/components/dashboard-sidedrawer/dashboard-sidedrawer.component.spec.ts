import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSidedrawerComponent } from './dashboard-sidedrawer.component';

describe('DashboardSidedrawerComponent', () => {
  let component: DashboardSidedrawerComponent;
  let fixture: ComponentFixture<DashboardSidedrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSidedrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSidedrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
