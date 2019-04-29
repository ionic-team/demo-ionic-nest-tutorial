import { Injectable } from '@nestjs/common';
import { Mission } from 'src/models/mission.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MissionsService {
  constructor(
    @InjectRepository(Mission) private missionsRepository: Repository<Mission>,
  ) {}

  async getMissions(): Promise<Mission[]> {
    return this.missionsRepository.find({ isDeleted: false });
  }

  async getMission(id: number): Promise<Mission | undefined> {
    return this.missionsRepository.findOne(id, {
      where: {
        isDeleted: false,
      },
    });
  }

  async createMission(mission: Mission): Promise<Mission> {
    return this.missionsRepository.save(mission);
  }

  async updateMission(id: number, mission: Mission) {
    const current = await this.getMission(id);
    if (!current) {
      return null;
    }
    mission.id = current.id;
    mission.createdAt = current.createdAt;
    mission.createdBy = current.createdBy;
    return this.missionsRepository.save(mission);
  }

  async deleteMission(id: number) {
    const current = await this.getMission(id);
    if (!current) {
      return null;
    }
    current.isDeleted = true;
    return this.updateMission(id, current);
  }
}
