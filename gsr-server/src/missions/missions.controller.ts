import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { MissionsService } from './missions.service';
import { Mission } from 'src/models/mission.model';

@Controller('missions')
export class MissionsController {
  constructor(private missionsService: MissionsService) {}

  @Get()
  getMissions() {
    return this.missionsService.getMissions();
  }

  @Get(':id')
  getMission(@Param('id') id: number) {
    return this.missionsService.getMission(id);
  }

  @Post()
  async createMission(@Body() mission: Mission) {
    return this.missionsService.createMission(mission);
  }

  @Put(':id')
  async updateMission(@Param('id') id: number, @Body() mission: Mission) {
    return this.missionsService.updateMission(id, mission);
  }

  @Delete(':id')
  async deleteMission(@Param('id') id: number) {
    return this.missionsService.deleteMission(id);
  }
}
