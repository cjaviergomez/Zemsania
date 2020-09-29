import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConfigComponent } from './item-config.component';

describe('ItemConfigComponent', () => {
  let component: ItemConfigComponent;
  let fixture: ComponentFixture<ItemConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
