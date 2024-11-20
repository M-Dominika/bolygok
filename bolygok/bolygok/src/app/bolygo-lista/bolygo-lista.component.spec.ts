import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolygoListaComponent } from './bolygo-lista.component';

describe('BolygoListaComponent', () => {
  let component: BolygoListaComponent;
  let fixture: ComponentFixture<BolygoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BolygoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolygoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
