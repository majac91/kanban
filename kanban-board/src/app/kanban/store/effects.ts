import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { KanbanService } from '../services/kanban.service';
import * as KanbanActions from './actions';

@Injectable()
export class KanbanEffects {
  private actions$ = inject(Actions);
  private kanbanService = inject(KanbanService);

  fetchPriority$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KanbanActions.fetchPriority),
      mergeMap(({ taskId }) =>
        this.kanbanService.getTaskPriority(taskId).pipe(
          map(priority =>
            KanbanActions.fetchPrioritySuccess({ taskId, priority })
          ),
          catchError(error =>
            of(KanbanActions.fetchPriorityFailure({
              taskId,
              error: error.message || 'Failed to fetch priority'
            }))
          )
        )
      )
    )
  );
}