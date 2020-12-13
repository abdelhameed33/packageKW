import { Controller, Delete, Param, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { unlink } from 'fs';
import { diskStorage } from 'multer'
import { Observable, of } from 'rxjs';

const path = require('path')
export const storage = {
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + '-' + Date.now();
            const extension: string = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`)
        }
    })
}

@Controller('images')
export class ImageController {


    @Post()
    // @Roles('admin')
    // @UseGuards(AuthGuard(), RolesGuard)
    @UseInterceptors(FileInterceptor('file', storage))
    uploadFile(@UploadedFile() file): Observable<Object> {
        return of({ imagePath: file.filename });
    }

    @Delete('/:image_name')
    deleteFile(@Param('image_name') image_name: string){
        console.log(image_name)
        unlink('./uploads/'+image_name, (err) => {
            if (err) {
              console.error(err)
              return
            }
        });
    }

}
