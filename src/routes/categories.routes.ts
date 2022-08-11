import { Router } from 'express';
import { v4 } from 'uuid';
import Category from '../model/Category';
import CategoryRepository from '../repositories/CategoryRepository';

const app = Router();

const categoryRepository =  new CategoryRepository();

app.get('/', (req, resp) => {

    return resp.status(200).json({ testing: true })
});

app.post('/', (req, resp) => {
    const { name, description } = req.body;

    const newCategory: Category = {
        id: v4(),
        name,
        description,
        created_at: new Date()
    }
    
    categoryRepository.create(newCategory);

    return resp.status(200).json(newCategory)
});

export default app;