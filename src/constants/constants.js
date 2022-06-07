// const Gogig = require('../../public/gogig.jpg');
// import Gogig1 from 'assets/projectOverlay/gogig1.JPG';

import Spiderweb from '../../public/images/spiderweb_admin.png';
import Taqreeb from '../../public/images/taq.png'

import Buku1 from 'assets/overlay-images/buku1.png';
import Buku2 from 'assets/overlay-images/buku2.png';
import Buku3 from 'assets/overlay-images/buku3.png';
import Buku4 from 'assets/overlay-images/buku4.png';

import Tripkliq1 from 'assets/overlay-images/tripkliq1.png';
import Tripkliq2 from 'assets/overlay-images/tripkliq2.png';
import Tripkliq3 from 'assets/overlay-images/tripkliq3.png';
import Tripkliq4 from 'assets/overlay-images/tripkliq4.png';
import Tripkliq5 from 'assets/overlay-images/tripkliq5.png';

import Gogig1 from 'assets/overlay-images/gogig1.JPG'
import Gogig2 from 'assets/overlay-images/gogig2.JPG'
import Gogig3 from 'assets/overlay-images/gogig3.JPG'
import Gogig4 from 'assets/overlay-images/gogig4.JPG'

import Dosidoweb1 from 'assets/overlay-images/dosidoweb1.JPG';
import Dosidoweb2 from 'assets/overlay-images/dosidoweb2.JPG';
import Dosidoweb3 from 'assets/overlay-images/dosidoweb3.JPG';


export const projects = [
  {
    title: 'Gogig Marketing Website',
    description: 'GoGig\'s anonymous platform allows you to safely advance your career without jeopardizing your current job. Sign up to GoGig for free in as little as 2 minutes',
    image: Gogig1,
    images: [Gogig1, Gogig2, Gogig3, Gogig4],
    tags: ['Mongo', 'Express', 'React', 'Node'],
    source: 'https://www.gogig.com',
    visit: 'https://www.gogig.com',
    id: 0,
  },
  {
    title: 'Dosi do web',
    description: 'Dosi do web is build upon next.js and nest.js and is a CMS for hotels. Any hotel management can buy a template then they can adjust it accordingly.',
    image: Dosidoweb1,
    images: [Dosidoweb1, Dosidoweb2, Dosidoweb3],
    tags: ["Next.js", "Nest.js", "Docker"],
    id: 1,
  },

  {
    title: 'E-Taqreeb',
    description:
      'E-Taqreeb is a online booking MERN application which solves the problem of arrangement of small and big events',
    image: Taqreeb,
    images: [Taqreeb, Taqreeb, Taqreeb],
    tags: ['Mongo', 'Express', 'React', 'Node'],
    id: 2,
  },
  {
    title: 'Spider Web Dashboard',
    description:
      'Spider web is mobile application built for on site workers, Through This Admin portal on site manager can manager tasks of workers/employees.',
    image: Spiderweb,
    images: [Spiderweb, Spiderweb, Spiderweb],
    tags: ['React', 'Mongo DB', 'Express'],
    id: 3,
  },
  {
    title: 'Buku',
    description: 'Buku is based on web3 and blockchain. We have build this website start!',
    image: Buku1,
    images: [Buku1, Buku2, Buku3, Buku4],
    tags: ["React", "Mongo DB", "Express"],
    id: 4,
  },
  {
    title: 'Construct To App',
    description:
      'Tripkliq is a social media plateform for people who love traveling, users can plan trips, share their experience and photos and much more.',
    image: Tripkliq1,
    images: [Tripkliq1, Tripkliq2, Tripkliq3, Tripkliq4, Tripkliq5],
    tags: ["React", "Mongo DB", "Express", "TypeScript"],
    id: 5,
  },
];

export const TimeLineData = [
  { year: 2019, text: 'Created freelance projects for clients' },
  { year: 2020, text: 'Worked as junior developer' },
  { year: 2021, text: 'Became Successful Freelancer on Upwork' },
  { year: 2022, text: 'Became Top Rated Freelancer on Upwork' },
];
