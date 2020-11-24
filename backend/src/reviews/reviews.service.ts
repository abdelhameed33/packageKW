import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { ProductService } from 'src/category/service/product.service';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { Reviews } from './reviews.entity';

@Injectable()
export class ReviewsService {

    constructor(
        @InjectRepository(Reviews)
        private reviewsRepository: Repository<Reviews>,
        private productService: ProductService
    ){}

    async addReview(reviewDto: CreateReviewDto,user: User, productId: number):Promise<Reviews>{
        const {title , comment,rating} = reviewDto;
        const review = new Reviews();
        review.title=title;
        review.comment=comment;
        review.rating=rating;
        const productFound = await this.productService.isExists(productId);
        if (!productFound){
            throw new NotFoundException(`product with id:${productId} not found`)
        }
        review.product = <any>{ id: productId };
        review.user= user;
        await this.reviewsRepository.save(review);
        return review;
    }

}
