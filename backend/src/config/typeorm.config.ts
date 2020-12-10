import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { env } from "process";

export const typeOrmConfig : TypeOrmModuleOptions={
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'packagekw_db',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    logging: true,
    timezone: 'Z'
}