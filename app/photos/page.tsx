'use client';

import React, { useState } from 'react';
import styles from '../styles/page.module.css';
import Image from 'next/image';

import BackgroundImage from '../../public/general-photos/wilsons-background.jpeg';

// image imports
import Image1 from '../../public/general-photos/action-wrist.png';
import Image2 from '../../public/general-photos/big-climb.png';
import Image3 from '../../public/general-photos/center-climb.jpg';
import Image4 from '../../public/general-photos/chipper.png';
import Image5 from '../../public/general-photos/climb-down.png';
import Image6 from '../../public/general-photos/down_bucket.png';
import Image7 from '../../public/general-photos/dust-trail.png';
import Image8 from '../../public/general-photos/extended.png';
import Image9 from '../../public/general-photos/groundcut.png';
import Image10 from '../../public/general-photos/prune.png';
import Image11 from '../../public/general-photos/repel.png';
import Image12 from '../../public/general-photos/repel2.png';
import Image13 from '../../public/general-photos/right-branch-climb.jpg';
import Image14 from '../../public/general-photos/rot.jpg';
import Image15 from '../../public/general-photos/saw-dust-smile.png';
import Image16 from '../../public/general-photos/shoulder.png';
import Image17 from '../../public/general-photos/side.png';
import Image18 from '../../public/general-photos/wrist.png';

// icons
import LeftArrow from '../../public/icons/arrow-left.svg';
import RightArrow from '../../public/icons/arrow-right.svg';

import useMediaQuery from '../../components/MediaQuery';

export default function page() {
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 991px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  const [isEnlarged, setIsEnlarged] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageData = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
  ];

  const totalImages = imageData.length;

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  return (
    <>
      {isMobile ? (
        <>
          {isEnlarged ? (
            <div
              style={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                zIndex: 100,
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={imageData[currentImageIndex]}
                  alt="Image"
                  width={500}
                  height={500}
                  style={{
                    borderRadius: 10,
                    objectFit: 'cover',
                    maxWidth: '90%',
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />
              </div>
              <div style={{ height: 25 }} />

              <div>
                <Image
                  src={LeftArrow}
                  alt="Left Arrow"
                  width={24}
                  height={24}
                  onClick={() => {
                    handlePrevImage();
                  }}
                  style={{ marginRight: 20 }}
                />
                <Image
                  src={RightArrow}
                  alt="Right Arrow"
                  width={24}
                  height={24}
                  onClick={() => {
                    handleNextImage();
                  }}
                />
              </div>
              <div style={{ height: 25 }} />

              <button
                onClick={() => {
                  setIsEnlarged(false);
                }}
              >
                Exit
              </button>
            </div>
          ) : null}

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
              Photos
            </h2>
            <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet.</p>
          </div>

          <div
            style={{
              padding: 20,
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
                <div key={i} className="image-container">
                  <Image
                    src={item}
                    alt={'Gallery Image'}
                    width={150}
                    height={150}
                    style={{
                      borderRadius: 10,
                      backgroundColor: 'black',
                      margin: 5,
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setIsEnlarged(true);
                      console.log(isEnlarged);

                      setCurrentImageIndex(i);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          {isEnlarged ? (
            <div
              style={{
                width: '100%',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.75)',
                zIndex: 100,
                position: 'fixed',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={LeftArrow}
                  alt="Left Arrow"
                  width={24}
                  height={24}
                  onClick={() => {
                    handlePrevImage();
                  }}
                  style={{ cursor: 'pointer' }}
                />

                <Image
                  src={imageData[currentImageIndex]}
                  alt="Image"
                  width={500}
                  height={500}
                  style={{
                    borderRadius: 10,
                    objectFit: 'cover',
                    maxWidth: '90%',
                    marginLeft: 10,
                    marginRight: 10,
                  }}
                />

                <Image
                  src={RightArrow}
                  alt="Right Arrow"
                  width={24}
                  height={24}
                  onClick={() => {
                    handleNextImage();
                  }}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div style={{ height: 25 }} />
              <button
                onClick={() => {
                  setIsEnlarged(false);
                }}
              >
                Exit
              </button>
            </div>
          ) : null}

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
              Photos
            </h2>
            <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet.</p>
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
                <div key={i} className="image-container">
                  {isDesktop && (
                    <Image
                      src={item}
                      alt={'Gallery Image'}
                      width={300}
                      height={300}
                      style={{
                        borderRadius: 10,
                        backgroundColor: 'black',
                        margin: 5,
                        objectFit: 'cover',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setIsEnlarged(true);
                        console.log(isEnlarged);

                        setCurrentImageIndex(i);
                      }}
                    />
                  )}
                  {isTablet && (
                    <Image
                      src={item}
                      alt={'Gallery Image'}
                      width={250}
                      height={250}
                      style={{
                        borderRadius: 10,
                        backgroundColor: 'black',
                        margin: 5,
                        objectFit: 'cover',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        setIsEnlarged(true);
                        console.log(isEnlarged);

                        setCurrentImageIndex(i);
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
