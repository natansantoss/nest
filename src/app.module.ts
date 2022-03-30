import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserMiddleware } from './middlewares/user.middleware';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [], 
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('user');
  }
}
