import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedescriptcionComponent } from './pokedescriptcion.component';

describe('PokedescriptcionComponent', () => {
  let component: PokedescriptcionComponent;
  let fixture: ComponentFixture<PokedescriptcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedescriptcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedescriptcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
