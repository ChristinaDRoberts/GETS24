import styles from '../app/styles/page.module.css';
import Image from 'next/image';
import BackgroundImage from '../public/general-photos/wilsons-background.jpeg';

export default function LandingPage() {
  return (
    <div
      style={{
        height: '90vh',
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
      <h1 className={styles.center_text} style={{ color: 'white' }}>
        Wilsons Emergency <br />
        Tree Service
      </h1>
      <p style={{ textAlign: 'center', width: 300, color: 'white' }}>
        Lorem ipsum dolor sit amet loream ipsum dolor sit amet lorem ipsum.
      </p>
      <div style={{ height: 25 }} />
      <a href="tel:+18772288873" target="_blank">
        <button style={{ fontSize: 25 }}>Call Now for a Free Quote</button>
      </a>
    </div>
  );
}

export function MobileLandingPage() {
  return (
    <div
      style={{
        height: '90vh',
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
      <h1
        className={styles.center_text}
        style={{ color: 'white', fontSize: 45 }}
      >
        Wilsons Emergency <br />
        Tree Service
      </h1>
      <p style={{ textAlign: 'center', width: 300, color: 'white' }}>
        Lorem ipsum dolor sit amet loream ipsum dolor sit amet lorem ipsum.
      </p>
      <div style={{ height: 25 }} />
      <a href="tel:+18772288873" target="_blank">
        <button style={{ fontSize: 20, lineHeight: 1.5 }}>
          Call Now for a <br />
          Free Quote
        </button>
      </a>
    </div>
  );
}
