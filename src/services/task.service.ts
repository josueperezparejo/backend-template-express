import { Task } from "../models";

class TaskService {
  public async getAll() {
    return Task.findAll();
  }

  public async getById(id: string) {
    return Task.findByPk(id);
  }

  public async create(data: {
    title: string;
    description?: string;
    completed: boolean;
  }) {
    return Task.create({
      title: data.title,
      description: data.description,
      completed: data.completed,
    });
  }

  public async update(
    id: string,
    updates: Partial<{ title: string; description: string; completed: boolean }>
  ) {
    const task = await Task.findByPk(id);
    if (!task) return null;
    await task.update(updates);
    return task;
  }

  public async delete(id: string) {
    const task = await Task.findByPk(id);
    if (!task) return null;
    await task.destroy();
    return task;
  }
}

export default new TaskService();
