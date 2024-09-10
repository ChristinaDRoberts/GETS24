'use client';

import ReviewCard from '@/components/ReviewCard';
import styles from '../styles/page.module.css';
import Image from 'next/image';

import DestinyIcon from '../../public/review-icons/destiny-review.png';
import CarrieIcon from '../../public/review-icons/carrie-review.png';
import RachelIcon from '../../public/review-icons/rachel-review.png';
import TonyIcon from '../../public/review-icons/tony-review.jpg';
import BethanyIcon from '../../public/review-icons/bethany-review.png';
import TomIcon from '../../public/review-icons/tom-review.png';
import PrentissIcon from '../../public/review-icons/prentiss-review.png';
import DeannaIcon from '../../public/review-icons/deanna-review.png';
import TeriIcon from '../../public/review-icons/teri-review.png';

import BackgroundImage from '../../public/general-photos/wilsons-background.jpeg';

import useMediaQuery from '../../components/MediaQuery';

export default function page() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const imageData = [
    {
      icon: CarrieIcon,
      text: 'Very professional team! Speedy and efficient service. Had multiple tress and hanging limbs that needed to be removed, and the job was done by lunchtime! Highly recommend.',
      name: 'Carrie Bailey',
    },
    {
      icon: RachelIcon,
      text: 'Very professional and nice. Hard worker. Does what he says he will and does a good job.',
      name: 'Rachel Palm',
    },
    {
      icon: TonyIcon,
      text: 'Wilson Tree service came out and did some tree clearing for me and cut some limbs over my building. He did a great job and I recommend him to anyone needing work done. Very reasonable prices.',
      name: 'Tony Barnett',
    },
    {
      icon: BethanyIcon,
      text: 'Brent chopped down huge leaning pines on my property so quickly, I was amazed. They were super scary to us, but to him it seemed like nothing! Thanks Brent! 😁',
      name: 'Bethany Underwood',
    },
    {
      icon: TomIcon,
      text: 'Great service..hardworking guy..reasonable prices..would definitely recommend his services.',
      name: 'Tom McGill',
    },
    {
      icon: PrentissIcon,
      text: 'Brent took down several trees in our yard and did an amazing job! Thanks for your help.',
      name: 'Prentiss Palm',
    },
    {
      icon: DeannaIcon,
      text: 'Always on time. Always very polite. Wonderful to do business with. Very professional and great prices! They cut some trees on our property, it took no time at all, clean up and everything.',
      name: 'Deanna Lingo',
    },
    {
      icon: TeriIcon,
      text: 'David recently cut some trees and removed some limbs over our home. He did a great job. Very hard worker. Great price. Thank you David.',
      name: 'Teri Reynolds Wills',
    },
    {
      icon: DestinyIcon,
      text: 'Fast, great service! Highly recommended!',
      name: 'Destiny Hollingworth',
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
              alt="Wilson's Emergency Tree Service Background"
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
              alt="Wilson's Emergency Tree Service Background"
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
