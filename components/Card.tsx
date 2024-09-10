import Image, { StaticImageData } from 'next/image';
import PlaceholderImage from '../public/placeholder-img.png';
import styles from '../app/styles/page.module.css';

import useMediaQuery from '../components/MediaQuery';

export default function Card({
  image = PlaceholderImage,
  title,
  text,
  flipped = false,
}: {
  image?: StaticImageData;
  title: string;
  text: string;
  flipped?: boolean;
}) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 20,
        marginBottom: 20,
      }}
    >
      {flipped ? (
        <>
          <Image
            src={image}
            alt="Card Image"
            width={400}
            height={450}
            style={{
              borderRadius: 10,
              marginRight: 100,
              objectFit: 'cover',
              backgroundColor: 'black',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            }}
          />

          <div style={{ width: 375 }}>
            <h2>{title}</h2>
            <p style={{ color: 'var(--med-blue)' }}>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div style={{ width: 375, textAlign: 'right' }}>
            <h2>{title}</h2>
            <p style={{ color: 'var(--med-blue)' }}>{text}</p>
          </div>

          <Image
            src={image}
            alt="Card Image"
            width={400}
            height={450}
            style={{
              borderRadius: 10,
              marginLeft: 100,
              objectFit: 'cover',
              backgroundColor: 'black',
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            }}
          />
        </>
      )}
    </div>
  );
}

export function ResponsiveCard({
  image = PlaceholderImage,
  title,
  text,
}: {
  image?: StaticImageData;
  title: string;
  text: string;
}) {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Image
        src={image}
        alt="Card Image"
        width={400}
        height={450}
        style={{
          borderRadius: 10,
          objectFit: 'cover',
          backgroundColor: 'black',
          boxShadow:
            'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
          maxWidth: '90%',
        }}
      />
      <div style={{ height: 50 }} />

      <h2 className={styles.center_text}>{title}</h2>
      {isMobile ? (
        <p
          style={{
            color: 'var(--dark-blue)',
            textAlign: 'center',
            width: '75%',
          }}
        >
          {text}
        </p>
      ) : (
        <p
          style={{
            color: 'var(--med-blue)',
            textAlign: 'center',
            width: '75%',
          }}
        >
          {text}
        </p>
      )}
    </div>
  );
}
