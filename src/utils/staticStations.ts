import { IStation } from 'interfaces/Station.interface';

const staticData: IStation[] = [
  {
    id: '1',
    name: 'Putin FM',
    frequency: '66,6',
    cover: '/images/cover.png',
  },
  {
    id: '2',
    name: 'Dribble FM',
    frequency: '101,2',
    cover: '/images/cover.png',
  },
  {
    id: '3',
    name: 'Doge FM',
    frequency: '99,4',
    cover: '/images/cover.png',
  },
  {
    id: '4',
    name: 'Ballads FM',
    frequency: '87,1',
    cover: '/images/cover.png',
  },
  {
    id: '5',
    name: 'Maximum FM',
    frequency: '142,2',
    cover: '/images/cover.png',
  },
];

export const getStaticStations = (): Promise<IStation[]> => {
  return new Promise<IStation[]>(function (resolve, reject) {
    // fake validation
    if (null !== undefined) {
      setTimeout(() => resolve(staticData), 1500);
    } else {
      setTimeout(() => reject(new Error('Failed to fetch stations...')), 1000);
    }
  });
};
