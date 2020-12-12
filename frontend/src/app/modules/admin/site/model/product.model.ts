export class Product {
    public images: any[];
    constructor(
        public id?: string,
        public title?: string,
        public description?: string,
        public price?: number,
        public quantity?: number,
        public properties?: string,
        public category?: any
    ) {
        this.images = [];
    }

}
