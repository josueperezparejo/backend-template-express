import { Request, Response } from "express";
import { taskService } from "../services";

class TaskController {
  public async getAllTasks(_req: Request, res: Response): Promise<void> {
    const tasks = await taskService.getAll();
    res.json(tasks);
  }

  public async getTaskById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const task = await taskService.getById(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json(task);
  }

  public async createTask(req: Request, res: Response): Promise<void> {
    const { title, description, completed } = req.body;
    const newTask = await taskService.create({ title, description, completed });
    res.status(201).json(newTask);
  }

  public async updateTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const task = await taskService.update(id, req.body);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json(task);
  }

  public async deleteTask(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const task = await taskService.delete(id);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json({ message: "Task deleted" });
  }
}

export default new TaskController();
