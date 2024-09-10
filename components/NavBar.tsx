'use client';

import styles from '../app/styles/page.module.css';
import Image from 'next/image';
import Logo from '../public/logo.png';
import { useState } from 'react';
import useMediaQuery from './MediaQuery';

export default function NavBar() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  const [sidebar, setSidebar] = useState(false);

  const openSidebar = () => {
    setSidebar(!sidebar);
  };

  const linkClick = () => {
    setSidebar(false);
  };

  return (
    <>
      {isMobile ? (
        <>
          <div
            style={{
              position: 'fixed',
              width: '100vw',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'var(--dark-blue)',
                padding: 10,
                boxShadow:
                  'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
              }}
            >
              <a href="/">
                <Image src={Logo} alt="Logo" width={100} height={90} />
              </a>
              <div className="navbar-container">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="36.383"
                  viewBox="0 0 52.084 36.383"
                  onClick={openSidebar}
                  className="navbarIcon"
                >
                  <g
                    id="hamburger_menu_icon"
                    data-name="hamburger menu icon"
                    transform="translate(-4.5 -7.125)"
                  >
                    <path
                      id="Path_22"
                      data-name="Path 22"
                      d="M42.981,14.465H6.173A1.977,1.977,0,0,1,4.5,12.3h0a1.977,1.977,0,0,1,1.673-2.17H42.981a1.977,1.977,0,0,1,1.673,2.17h0A1.977,1.977,0,0,1,42.981,14.465Z"
                      transform="translate(11.93 -3)"
                      fill="#fff"
                    />
                    <path
                      id="Path_23"
                      data-name="Path 23"
                      d="M54.414,21.215H6.67a2.177,2.177,0,0,1-2.17-2.17h0a2.177,2.177,0,0,1,2.17-2.17H54.414a2.177,2.177,0,0,1,2.17,2.17h0A2.177,2.177,0,0,1,54.414,21.215Z"
                      transform="translate(0 6.271)"
                      fill="#fff"
                    />
                    <path
                      id="Path_24"
                      data-name="Path 24"
                      d="M54.414,27.965H6.67A2.177,2.177,0,0,1,4.5,25.8h0a2.177,2.177,0,0,1,2.17-2.17H54.414a2.177,2.177,0,0,1,2.17,2.17h0A2.177,2.177,0,0,1,54.414,27.965Z"
                      transform="translate(0 15.542)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {sidebar ? (
            <>
              <div
                style={{
                  backgroundColor: 'var(--light-blue)',
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',

                  zIndex: 999,
                }}
              >
                <div
                  onClick={linkClick}
                  style={{
                    padding: 20,
                    textAlign: 'right',
                  }}
                >
                  <span>&times;</span>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh',
                    width: '100%',
                    margin: 0,
                    padding: 0,
                  }}
                >
                  <a href="/">
                    <Image src={Logo} alt="Logo" width={160} height={140} />
                  </a>
                  <div style={{ height: 30 }} />
                  <a
                    href="/photos"
                    style={{ marginTop: 10, marginBottom: 10, fontSize: 24 }}
                  >
                    Photos
                  </a>
                  <a
                    href="/reviews"
                    style={{ marginTop: 10, marginBottom: 10, fontSize: 24 }}
                  >
                    Reviews
                  </a>
                  <a
                    href="https://www.facebook.com/DavidWilsonTreeService/"
                    target="_blank"
                    style={{ marginTop: 10, marginBottom: 10, fontSize: 24 }}
                  >
                    Facebook
                  </a>
                  <div style={{ height: 50 }} />
                  <a href="tel:+18772288873" target="_blank">
                    <button
                      style={{ fontSize: 20 }}
                      className={styles.navbar_modal_button}
                    >
                      Call Now
                    </button>
                  </a>
                </div>
              </div>
            </>
          ) : null}
        </>
      ) : (
        <div
          style={{
            position: 'fixed',
            width: '100vw',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--dark-blue)',
              padding: 20,
              boxShadow:
                'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
            }}
          >
            <a href="/">
              <Image src={Logo} alt="Logo" width={115} height={100} />
            </a>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 400,
              }}
            >
              <a className={styles.navbar_link} href="/photos">
                Photos
              </a>
              <a className={styles.navbar_link} href="/reviews">
                Reviews
              </a>
              <a
                className={styles.navbar_link}
                href="https://www.facebook.com/DavidWilsonTreeService/"
                target="_blank"
              >
                Facebook
              </a>
              <a href="tel:+18772288873" target="_blank">
                <button>Call Now</button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
