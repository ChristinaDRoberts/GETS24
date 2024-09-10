'use client';

import React from 'react';
import PlaceholderIcon from '../public/placeholder-img.png';
import Image, { StaticImageData } from 'next/image';
import styles from '../app/styles/page.module.css';

import useMediaQuery from '../components/MediaQuery';

export default function ReviewCard({
  icon = PlaceholderIcon,
  text,
  name,
}: {
  icon?: StaticImageData;
  text: string;
  name: string;
}) {
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 991px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {isDesktop && (
        <div
          style={{
            backgroundColor: '#f4f4f4',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 20,
            borderRadius: 10,
            width: 350,
            height: 250,
            margin: 10,

            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          }}
        >
          <Image
            src={icon}
            alt="Review Person Icon"
            width={100}
            height={100}
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              objectFit: 'cover',
              marginRight: 24,
            }}
          />

          <p
            style={{
              color: 'var(--med-blue)',
              fontFamily: 'Outage',
              paddingTop: 20,
            }}
            className={styles.center_text}
          >
            {name}
          </p>

          <p style={{ color: 'black' }} className={styles.center_text}>
            "{text}"
          </p>
        </div>
      )}

      {isTablet && (
        <div
          style={{
            backgroundColor: '#f4f4f4',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 20,
            borderRadius: 10,
            width: '35%',
            height: 300,
            margin: 10,

            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          }}
        >
          <Image
            src={icon}
            alt="Review Person Icon"
            width={100}
            height={100}
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              objectFit: 'cover',
              marginRight: 24,
            }}
          />

          <p
            style={{
              color: 'var(--med-blue)',
              fontFamily: 'Outage',
              paddingTop: 20,
            }}
            className={styles.center_text}
          >
            {name}
          </p>

          <p style={{ color: 'black' }} className={styles.center_text}>
            "{text}"
          </p>
        </div>
      )}

      {isMobile && (
        <div
          style={{
            backgroundColor: '#f4f4f4',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: 20,
            borderRadius: 10,
            width: '100%',
            // height: 300,
            margin: 10,
            boxShadow:
              'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          }}
        >
          <Image
            src={icon}
            alt="Review Person Icon"
            width={100}
            height={100}
            style={{
              backgroundColor: 'white',
              borderRadius: 100,
              objectFit: 'cover',
              marginRight: 24,
            }}
          />

          <p
            style={{
              color: 'var(--med-blue)',
              fontFamily: 'Outage',
              paddingTop: 20,
            }}
            className={styles.center_text}
          >
            {name}
          </p>

          <p style={{ color: 'black' }} className={styles.center_text}>
            "{text}"
          </p>
        </div>
      )}
    </>
  );
}
