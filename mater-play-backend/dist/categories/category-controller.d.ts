import { Category } from "src/categories/category-entity";
import { CategoryService } from "src/categories/category-service";
export declare class CategoryController {
    private service;
    constructor(service: CategoryService);
    findAll(): Promise<Category[]>;
    findById(id: number): Promise<Category>;
    create(category: Category): Promise<Category>;
    update(id: number, category: Category): Promise<Category>;
    remove(id: number): Promise<void>;
}
