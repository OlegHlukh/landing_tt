import { AppleTv } from '../schemas/apple-tv.schema';

const generateFakeFilms = () => {
  const seedAppleTv: AppleTv[] = [
    {
      name: 'Seven Kings Must Die',
      genre: 'Action',
      poster: 'seven-kindom.png',
    },
    {
      name: 'Indiana Jones and the Dial of Destiny',
      genre: 'Action',
      poster: 'indiana_jhons.jpg',
    },
    {
      name: 'Seven Kings Must Die',
      genre: 'Action',
      poster: 'seven-kindom.png',
    },
    {
      name: 'Indiana Jones and the Dial of Destiny',
      genre: 'Action',
      poster: 'indiana_jhons.jpg',
    },
    {
      name: 'Seven Kings Must Die',
      genre: 'Action',
      poster: 'seven-kindom.png',
    },
  ];

  return seedAppleTv;
};

export default generateFakeFilms;
