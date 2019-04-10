import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MissionsService } from './missions/missions.service';
import { MissionsController } from './missions/missions.controller';

@Module({
  imports: [],
  controllers: [AppController, MissionsController],
  providers: [AppService, MissionsService],
})
export class AppModule {}
