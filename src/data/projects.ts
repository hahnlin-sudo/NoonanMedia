export interface Photo {
  id: number;
  src: string;
  artist: string;
  caption: string;
  crop?: string;
}

export const photos: Photo[] = [
  { id: 1, src: '/images/work/01-dusan-concept.jpg', artist: '@dusan.wav', caption: 'Concept Shoot' },
  { id: 2, src: '/images/work/02-ryan-lake.jpg', artist: '@ryan.peter.murphy', caption: 'Album Cover — 500K+ Streams' },
  { id: 3, src: '/images/work/03-duda-boa.jpg', artist: '@dudasings', caption: 'Live Show', crop: 'center 30%' },
  { id: 4, src: '/images/work/04-julia-mah.jpg', artist: '@juliamah1', caption: 'Artist Portrait' },
  { id: 5, src: '/images/work/05-julian-pavone-red.jpg', artist: '@julianpavonemusic', caption: 'Live Show', crop: 'center 40%' },
  { id: 6, src: '/images/work/06-ryan-bw.jpg', artist: '@ryan.peter.murphy', caption: 'Album Cover' },
  { id: 7, src: '/images/work/07-dusan-profile.jpg', artist: '@dusan.wav', caption: 'Album Cover' },
  { id: 8, src: '/images/work/08-simon-mustard.jpg', artist: '@simondavis.music', caption: 'Artist Portrait' },
  { id: 9, src: '/images/work/09-grace-kelly.jpg', artist: '@gracekelly_music', caption: 'Live Show', crop: 'center 20%' },
  { id: 10, src: '/images/work/10-emily-violin.jpg', artist: '@emilysclar', caption: 'Live Show', crop: 'center 30%' },
  { id: 11, src: '/images/work/11-ryan-santa.jpg', artist: '@ryan.peter.murphy', caption: 'Album Cover' },
  { id: 12, src: '/images/work/12-simon-poncho.jpg', artist: '@simondavis.music', caption: 'Artist Portrait', crop: '40% center' },
  { id: 13, src: '/images/work/13-lauren-jade.jpg', artist: '@lauren.hertzig', caption: 'Artist Portrait' },
  { id: 14, src: '/images/work/14-julian-studio.jpg', artist: '@julianpavonemusic', caption: 'Studio Session', crop: 'center 60%' },
  { id: 15, src: '/images/work/15-simon-piano.jpg', artist: '@simondavis.music', caption: 'Live Show' },
  { id: 16, src: '/images/work/16-duda-dancer.jpg', artist: 'Dancer', caption: 'Live Show', crop: 'center 70%' },
  { id: 17, src: '/images/work/17-emily-simon-band.jpg', artist: '@emilysclar & @simondavis.music', caption: 'Live Show', crop: 'center 70%' },
  { id: 18, src: '/images/work/18-simon-umbrella.jpg', artist: '@simondavis.music', caption: 'Concept Shoot', crop: '62% center' },
];
