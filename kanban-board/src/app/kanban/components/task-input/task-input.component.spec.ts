import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TaskInputComponent } from './task-input.component';
import * as KanbanActions from '../../store/actions';

describe('TaskInputComponent', () => {
  let component: TaskInputComponent;
  let fixture: ComponentFixture<TaskInputComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskInputComponent, FormsModule],
      providers: [provideMockStore()]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(TaskInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should dispatch addTask action and clear input when title is valid', () => {
    const mockId = '123e4567-e89b-12d3-a456-426614174000';
    spyOn(crypto, 'randomUUID').and.returnValue(mockId);
    component.taskTitle = 'New Task';

    component.addTask();

    expect(store.dispatch).toHaveBeenCalledWith(
      KanbanActions.addTask({ title: 'New Task', id: mockId })
    );
    expect(store.dispatch).toHaveBeenCalledWith(
      KanbanActions.fetchPriority({ taskId: mockId })
    );
    expect(component.taskTitle).toBe('');
  });

  it('should not dispatch action when title is empty or whitespace', () => {
    component.taskTitle = '   ';

    component.addTask();

    expect(store.dispatch).not.toHaveBeenCalled();
  });
});