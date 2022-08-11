import Category from "../model/Category";
/**
 *  This class is going to access a DATABASE in the future
 *
 *  We will mock the database using an array for now
 *  
 */


class CategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create(data: Category) {
        this.categories.push(data);
    }
}

export default CategoryRepository;