import { Injectable } from '@nestjs/common';
import { Mission } from 'src/models/mission.model';

@Injectable()
export class MissionsService {
  missions: Mission[] = [
    {
      id: 1,
      title: 'Rescue cat stuck in asteroid',
      reward: 500,
      active: true,
    },
    {
      id: 2,
      title: 'Escort Royal Fleet',
      reward: 5000,
      active: true,
    },
    {
      id: 3,
      title: 'Pirates attacking the station',
      reward: 2500,
      active: false,
    },
  ];

  async getMissions(): Promise<Mission[]> {
    return this.missions;
  }
}
