import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionsService } from './missions/missions.service';
import { MissionsController } from './missions/missions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mission } from './models/mission.model';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { DataInterceptor } from './util/data.interceptor';
import { DataPipe } from './util/data.pipe';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'gsruser', // Update to your db username
      password: 'gsruserpassword', // Update to your db password
      database: 'gospaceranger',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Mission]),
  ],
  controllers: [AppController, MissionsController],
  providers: [
    AppService,
    MissionsService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DataInterceptor,
    },
    {
      provide: APP_PIPE,
      useClass: DataPipe,
    },
  ],
})
export class AppModule {}
