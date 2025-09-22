import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TaskCardComponent } from './task-card.component';
import { Task } from '../../interfaces/task.interface';
import { TaskStatus } from '../../enums/task-status.enum';
import { TaskPriority } from '../../enums/task-priority.enum';
import * as KanbanActions from '../../store/actions';
import { ComponentRef } from '@angular/core';

describe('TaskCardComponent', () => {
  let component: TaskCardComponent;
  let fixture: ComponentFixture<TaskCardComponent>;
  let store: MockStore;
  let componentRef: ComponentRef<TaskCardComponent>;

  const mockTask: Task = {
    id: '1',
    title: 'Test Task',
    status: TaskStatus.TODO,
    priority: TaskPriority.HIGH,
    loadingPriority: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCardComponent],
      providers: [provideMockStore()]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch');

    fixture = TestBed.createComponent(TaskCardComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    componentRef.setInput('task', mockTask);
    fixture.detectChanges();
  });

  it('should update task title when valid edit is saved', () => {
    component.editTitle = 'Updated Task';
    component.isEditing = true;

    component.saveEdit();

    expect(store.dispatch).toHaveBeenCalledWith(
      KanbanActions.updateTask({
        taskId: '1',
        title: 'Updated Task'
      })
    );
    expect(component.isEditing).toBe(false);
  });

  it('should dispatch delete action when task is deleted', () => {
    component.deleteTask();

    expect(store.dispatch).toHaveBeenCalledWith(
      KanbanActions.deleteTask({ taskId: '1' })
    );
  });

  it('should not save edit when title is empty', () => {
    component.editTitle = '   ';
    component.isEditing = true;

    component.saveEdit();

    expect(store.dispatch).not.toHaveBeenCalled();
    expect(component.isEditing).toBe(true);
  });
});