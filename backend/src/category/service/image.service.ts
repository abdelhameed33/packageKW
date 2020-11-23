import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductRepository } from '../repository/Product.repository';
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
        for (const imageName in images) {
            const image = new Image();
            image.image_name= images[imageName];
            image.product=product;
            await this.imageRepository.save(image);
            savedImages.push(image);
        }
       return savedImages;
    }

}