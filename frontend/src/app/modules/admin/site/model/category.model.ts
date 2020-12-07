export class Category {
    public id?: number;
    public name: string;
    public description: string;
    // tslint:disable-next-line: variable-name
    public ar_description?: string;
    // tslint:disable-next-line: variable-name
    ar_name?: string;
    productCount = 0;
    parentId?: any;

    constructor(name: string = '', description: string = '') {
        this.name = name;
        this.description = description;
    }

}
