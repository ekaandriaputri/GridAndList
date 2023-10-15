import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TugaslistPage } from './tugaslist.page';

describe('TugaslistPage', () => {
  let component: TugaslistPage;
  let fixture: ComponentFixture<TugaslistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TugaslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
