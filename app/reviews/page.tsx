'use client';

import ReviewCard from '@/components/ReviewCard';
import styles from '../styles/page.module.css';
import Image from 'next/image';

import DestinyIcon from '../../public/review-icons/destiny-review.png';
import DrakeIcon from '../../public/review-icons/drake-review.png';
import RachelIcon from '../../public/review-icons/rachel-review.png';
import BethanyIcon from '../../public/review-icons/bethany-review.png';
import TomIcon from '../../public/review-icons/tom-review.png';
import PrentissIcon from '../../public/review-icons/prentiss-review.png';
import HeatherOIcon from '../../public/review-icons/heather-o-review.png';
import TracyIcon from '../../public/review-icons/tracy-review.png';

import BackgroundImage from '../../public/general-photos/guardian-background.jpeg';

import useMediaQuery from '../../components/MediaQuery';

export default function page() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const imageData = [
    {
      icon: RachelIcon,
      text: 'Guardian Emergency Tree Service came and trimmed a tree that was hanging over my power lines from the neighbors yard.  They did an amazing job.  They took care of all the business with the power company, it was disconnected and reconnected all while I was at work.  They were very professional and it looks great.  Also, now Im not worried about limbs falling on my power line.',
      name: 'Rachel Palm',
    },
    {
      icon: BethanyIcon,
      text: 'My land looks completely different!  Hurricane Helene had ravaged my land and I had no way to clean it up. Not only did Guardian’s folks show up extremely promptly, but they are total professionals!!  Thank you to the whole crew!!  ❤️🙌☺️ ',
      name: 'Bethany Underwood',
    },
    {
      icon: DrakeIcon,
      text: 'Super appreciative of their service and timely assistance. Came to take down a tree still hanging out after Hurricane Helene, the day before we were getting hit with a big ice/snow storm! Now I feel safe and happy.',
      name: 'Drake Davis',
    },
    {
      icon: PrentissIcon,
      text: 'They took down several trees in our yard and did an amazing job! Thanks for your help.',
      name: 'Prentiss Palm',
    },
    {
      icon: HeatherOIcon,
      text: 'They are fast! I had a dead gumball tree in my front yard that both my neighbor and myself have wanted gone for a while now. They came out within a couple days, took it down within an hour and cleaned up all the debris leaving my yard looking great. They were all also very friendly and professional upon meeting them. I highly recommend them!!',
      name: 'Heather Owens',
    },
    {
      icon: TracyIcon,
      text: 'Guardian Tree did an amazing and fast job.  They also handled getting our root ball which was over 5 feet tall and you would never have known that 2 trees were ever there!  They took 3 more trees down for us so we don’t have to worry about the next hurricane or storm!  The team was friendly and they stacked the trees for FEMA the best I’ve ever seen it done!  Thank you Guardian Emergency Tree Service for a job well done!',
      name: 'Tracy Goodwin',
    },



  ];

  return (
    <>
      {isMobile ? (
        <>
          <div
            style={{
              height: '50vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={BackgroundImage}
              alt="Guardian Emergency Tree Service Background"
              layout="fill"
              objectFit="cover"
              style={{
                filter: 'brightness(60%)',
                zIndex: -1,
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 80%, transparent)',
              }}
            />
            <h2
              className={styles.center_text}
              style={{ color: 'white', marginTop: 50 }}
            >
              Reviews
            </h2>
            <p style={{ color: 'white' }}>What folks are saying about us.</p>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              background:
                'linear-gradient(0deg, rgba(255,255,255,1) 90%, rgba(255,255,255,0) 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {imageData.map((item, i) => {
              return (
                <ReviewCard
                  text={item.text}
                  name={item.name}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              height: '50vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              src={BackgroundImage}
              alt="Guardian Emergency Tree Service Background"
              layout="fill"
              objectFit="cover"
              style={{
                filter: 'brightness(60%)',
                zIndex: -1,
                maskImage: 'linear-gradient(rgba(0, 0, 0, 1) 80%, transparent)',
              }}
            />
            <h2
              className={styles.center_text}
              style={{ color: 'white', marginTop: 50 }}
            >
              Reviews
            </h2>
            <p style={{ color: 'white' }}>What folks are saying about us.</p>
          </div>
          <div
            style={{
              backgroundColor: 'white',
              margin: '-50px 50px',
              padding: 50,
              paddingBottom: 100,
              borderRadius: 10,

              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {imageData.map((item, i) => {
              return (
                <ReviewCard
                  text={item.text}
                  name={item.name}
                  icon={item.icon}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
