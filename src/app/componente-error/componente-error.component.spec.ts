import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteErrorComponent } from './componente-error.component';

describe('ComponenteErrorComponent', () => {
  let component: ComponenteErrorComponent;
  let fixture: ComponentFixture<ComponenteErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
