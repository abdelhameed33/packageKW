export class Category {
    public id?: number;
    public name: string;
    public description: string;
    productCount = 0;
    public productList: [];

    constructor(name: string = '', description: string = '') {
        this.name = name;
        this.description = description;
        this.productList = [];
    }

}
