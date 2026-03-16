export interface Photo {
  id: number;
  src: string;
  artist: string;
  caption: string;
  crop?: string;
}

export const photos: Photo[] = [
  { id: 1, src: '/images/work/01-dusan-concept.jpg', artist: 'Dušan', caption: 'Concept Shoot' },
  { id: 2, src: '/images/work/02-ryan-lake.jpg', artist: 'Ryan Peter Murphy', caption: 'Album Cover — 500K+ Streams' },
  { id: 3, src: '/images/work/03-duda-boa.jpg', artist: 'Duda', caption: 'Live Show', crop: 'center 30%' },
  { id: 4, src: '/images/work/04-julia-mah.jpg', artist: 'Julia Mah', caption: 'Artist Portrait' },
  { id: 5, src: '/images/work/05-julian-pavone-red.jpg', artist: 'Julian Pavone', caption: 'Live Show', crop: 'center 40%' },
  { id: 6, src: '/images/work/06-ryan-bw.jpg', artist: 'Ryan Peter Murphy', caption: 'Album Cover' },
  { id: 7, src: '/images/work/07-dusan-profile.jpg', artist: 'Dušan', caption: 'Album Cover' },
  { id: 8, src: '/images/work/08-simon-mustard.jpg', artist: 'Simon Davis', caption: 'Artist Portrait' },
  { id: 9, src: '/images/work/09-grace-kelly.jpg', artist: 'Grace Kelly', caption: 'Live Show', crop: 'center 20%' },
  { id: 10, src: '/images/work/10-emily-violin.jpg', artist: 'Emily Sclar', caption: 'Live Show', crop: 'center 30%' },
  { id: 11, src: '/images/work/11-ryan-santa.jpg', artist: 'Ryan Peter Murphy', caption: 'Album Cover' },
  { id: 12, src: '/images/work/12-simon-poncho.jpg', artist: 'Simon Davis', caption: 'Artist Portrait', crop: '40% center' },
  { id: 13, src: '/images/work/13-lauren-jade.jpg', artist: 'Lauren Jade', caption: 'Artist Portrait' },
  { id: 14, src: '/images/work/14-julian-studio.jpg', artist: 'Julian Pavone', caption: 'Studio Session', crop: 'center 60%' },
  { id: 15, src: '/images/work/15-simon-piano.jpg', artist: 'Simon Davis', caption: 'Live Show' },
  { id: 16, src: '/images/work/16-duda-dancer.jpg', artist: "Duda's Dancer", caption: 'Live Show', crop: 'center 70%' },
  { id: 17, src: '/images/work/17-emily-simon-band.jpg', artist: 'Emily Sclar & Simon Davis', caption: 'Live Show', crop: 'center 70%' },
  { id: 18, src: '/images/work/18-simon-umbrella.jpg', artist: 'Simon Davis', caption: 'Concept Shoot', crop: '62% center' },
];
