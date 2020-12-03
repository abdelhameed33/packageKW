export class Category {
    public id?: number;
    public name: string;
    public description: string;
    // tslint:disable-next-line: variable-name
    public ar_description?: string;
    // tslint:disable-next-line: variable-name
    ar_name?: string;
    public productList: [];
    productCount = 0;

    constructor(name: string = '', description: string = '') {
        this.name = name;
        this.description = description;
        this.productList = [];
    }

}
