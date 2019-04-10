import { Controller, Get, Param } from '@nestjs/common';
import { MissionsService } from './missions.service';

@Controller('missions')
export class MissionsController {
  constructor(private missionsService: MissionsService) {}

  @Get()
  getMissions() {
    return this.missionsService.getMissions();
  }
}
