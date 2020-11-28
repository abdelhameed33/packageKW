import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../repository/product.repository';
import { ImageRepository } from '../repository/image.repository';
import { Image } from '../entities/image.entity';
import { Product } from '../entities/Product.entity';


@Injectable()
export class ImageService {

    constructor(
        @InjectRepository(ImageRepository)
        private imageRepository: ImageRepository) {
    }

    async saveAll(images:string[], product: Product):Promise<Image[]>{
        let savedImages:Image[]=[];
        for (let imageName of images) {
            const image = new Image();
            image.image_name= imageName;
            image.product=product;
            await this.imageRepository.save(image);
            savedImages.push(image);
        }
       return savedImages;
    }

}