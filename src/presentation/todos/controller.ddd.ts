import { Request, Response } from 'express';
import { prisma } from '../../data/postgres';
import { CreateTodoDto, UpdateTodoDto } from '../../domain/dtos';
import { TodoRepository } from '../../domain';


export class TodoController {

    //* DI
    constructor(
        private readonly repository: TodoRepository
    ) { }

    public getTodos = async (req: Request, res: Response) => {
        const todos = await this.repository.getAll();
        return res.json(todos);
    };

    public getTodoById = async (req: Request, res: Response) => {
        const id = +req.params.id; // El + se añade para que haga la conversion a numero

        if (isNaN(id)) return res.status(400).json({ error: 'ID argument is not a number' });


        try {
            const todo = await this.repository.findById(id);

            return res.json(todo);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    public createTodo = async (req: Request, res: Response) => {
        const [error, createTodoDto] = CreateTodoDto.create(req.body);

        if (error) return res.status(400).json({ error });


        const todo = await this.repository.create(createTodoDto!);

        return res.json(todo);
    }

    public updateTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;
        const [error, updateTodoDto] = UpdateTodoDto.create({ ...req.body, id })

        if (error) return res.status(400).json({ error });

        try {
            const updatedTodo = await this.repository.updateById(updateTodoDto!);

            return res.json(updateTodoDto);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }

    public deleteTodo = async (req: Request, res: Response) => {
        const id = +req.params.id;

        try {
            const deletedTodo = await this.repository.deleteById(id);

            return res.json(deletedTodo);
        } catch (error) {
            return res.status(400).json({ error });
        }

    }
}