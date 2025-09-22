import {Task} from "../interfaces/task.interface"

export interface KanbanState {
  tasks: Task[];
}

export const initialState: KanbanState = {
  tasks: []
};

