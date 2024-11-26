import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartaTelaComponent } from './quarta-tela.component';

describe('QuartaTelaComponent', () => {
  let component: QuartaTelaComponent;
  let fixture: ComponentFixture<QuartaTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuartaTelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuartaTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
