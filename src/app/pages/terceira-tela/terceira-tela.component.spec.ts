import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceiraTelaComponent } from './terceira-tela.component';

describe('TerceiraTelaComponent', () => {
  let component: TerceiraTelaComponent;
  let fixture: ComponentFixture<TerceiraTelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TerceiraTelaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerceiraTelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
