import { Body, Controller, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decerator';
import { User } from 'src/auth/user.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('products/:id/reviews')
@UseGuards(AuthGuard())
export class ReviewsController {

    constructor(
        private reviewService: ReviewsService
    ){}

    @Post()
    async addReview(
        @GetUser() user: User,
        @Param('id') productId: number,
        @Body()creatReviewDto: CreateReviewDto){
        return this.reviewService.addReview(creatReviewDto,user, productId);
    }
}
