'use client';

import React from 'react';
import styles from '../app/styles/page.module.css';

// pages & layouts
import LandingPage, { MobileLandingPage } from '@/components/LandingPage';
import PageLayout from '@/components/PageLayout';

// components
import Card, { ResponsiveCard } from '../components/Card';
import Highlights from '../components/Highlights';
import ReviewCard from '../components/ReviewCard';

// images
// TODO replace all but Rot in this section
import EmergencyImage from '../public/general-photos/melvin-point.png';
import RemovalImage from '../public/general-photos/square_throw.png';
import PruningImage from '../public/general-photos/orange-climb-2.png';
import AssessmentImage from '../public/general-photos/rot.jpg';
import OwnerImage from '../public/general-photos/christina-roberts.png';

// icons
import DrakeIcon from '../public/review-icons/drake-review.png';
import TracyIcon from '../public/review-icons/tracy-review.png';

import useMediaQuery from '../components/MediaQuery';

export default function Home() {
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 991px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <main>
      {isDesktop && (
        <>
          <LandingPage />

          <PageLayout>
            <div>
              <h3 className={styles.center_text} style={{ marginTop: 50 }}>
                What We Do Best
              </h3>
              <div style={{ height: 25 }} />

              <Card
                image={EmergencyImage}
                title={'Emergency Mitigation'}
                text={'Hurricanes, tornadoes, ice storms and heavy rain can all cause fallen trees on your home and other structures. We ae here to quickly and safely mitigate storm damage to get you back into your home and prevent further damage. We will even handle the claim with your insurance company, so you can focus on your immediate needs. '}
              />
              <Card
                image={RemovalImage}
                title={'Complete Tree Removal'}
                text={
                  'You can rely on us to safely and efficiently remove your trees while treating your property with the utmost care!'
                }
                flipped={true}
              />
              <Card
                image={PruningImage}
                title={'Tree Pruning'}
                text={
                  'Are your trees in need of attention after years of neglect or just a yearly pruning? We can help redeem your trees to a healthy and safe state and prepare your trees for many years of beautiful growth in the future!'
                }
              />
              <Card
                image={AssessmentImage}
                title={'Tree Assessment'}
                text={
                  "Fungus, rot, stunted growth or just not sure what is going on? We can come assess, reveal what is going on that you can't see, and make a game plan for restoration or removal."
                }
                flipped={true}
              />
            </div>

            <div style={{ height: 100 }} />

            {/* Highlights Section */}
            <div
              style={{
                backgroundColor: 'var(--light-blue)',
                paddingTop: 50,
                paddingBottom: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 className={styles.center_text}>
                But What Makes Us Different?
              </h2>
              <p
                className={styles.center_text}
                style={{ color: 'var(--med-blue)' }}
              >
                Need a good reason? Well here's a few:
              </p>

              <Highlights />
              <a href="tel:+18648008733" target="_blank">
                <button
                  style={{ fontSize: 25, width: 500 }}
                  className={styles.highlight_button}
                >
                  Call Now for a Free Quote
                </button>
              </a>
            </div>

            <div style={{ height: 100 }} />

            {/* About the Owner */}
            <div>
              <Card
                image={OwnerImage}
                title={'Meet the Owner'}
                text={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
                flipped={true}
              />
            </div>

            <div style={{ height: 100 }} />

            {/* Review Section */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 className={styles.center_text}>What People Are Saying</h2>
              <p
                style={{
                  width: 400,
                  textAlign: 'center',
                  color: 'var(--med-blue)',
                }}
              >
                We value our customers, and it shows!
              </p>

              <div style={{ height: 20 }} />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
              >
                <ReviewCard
                  icon={DrakeIcon}
                  text={
                    'Super appreciative of their service and timely assistance. Came to take down a tree still hanging out after Hurricane Helene, the day before we were getting hit with a big ice/snow storm! Now I feel safe and happy.'
                  }
                  name={'Drake Davis'}
                />
                <ReviewCard
                  icon={TracyIcon}
                  text={
                    'Guardian Tree did an amazing and fast job.  They also handled getting our root ball which was over 5 feet tall and you would never have known that 2 trees were ever there!  They took 3 more trees down for us so we don’t have to worry about the next hurricane or storm!  The team was friendly and they stacked the trees for FEMA the best I’ve ever seen it done!  Thank you Guardian Emergency Tree Service for a job well done!'
                  }
                  name={'Tracy Goodwin'}
                />
              </div>

              <div style={{ height: 20 }} />

              <a href="/reviews" className={styles.see_more}>
                See More
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: 50,
                marginTop: 100,
                marginBottom: 100,
              }}
            >
              <h2>
                Don't wait, schedule <br />
                your Free Quote Today!
              </h2>
              <p style={{ width: 650 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div style={{ height: 25 }} />
              <a href="tel:+18648008733" target="_blank">
                <button style={{ fontSize: 25 }}>Call Now</button>{' '}
              </a>
            </div>

            <div style={{ height: 50 }} />
          </PageLayout>
        </>
      )}

      {isTablet && (
        <>
          <LandingPage />

          <PageLayout>
            {/* What We Do Section */}
            <div>
              <h3 className={styles.center_text} style={{ marginTop: 50 }}>
                What We Do Best
              </h3>
              <div style={{ height: 25 }} />

              <ResponsiveCard
                image={EmergencyImage}
                title={'Emergency Mitigation'}
                text={'Lorem ipsum dolor sit amet'}
              />
              <ResponsiveCard
                image={RemovalImage}
                title={'Complete Tree Removal'}
                text={
                  'You can rely on us to safely and efficiently remove your trees while treating your property with the utmost care!'
                }
              />
              <ResponsiveCard
                image={PruningImage}
                title={'Tree Pruning'}
                text={
                  'Whether cleaning up after years of neglect or yearly pruning, we can redeem your trees to a healthy and safe state in many cases!'
                }
              />
              <ResponsiveCard
                image={AssessmentImage}
                title={'Tree Assessment'}
                text={
                  "Fungus, rot, stunted growth or just not sure what is going on? We can come assess, reveal what is going on that you can't see, and make a game plan for restoration or removal."
                }
              />
            </div>

            <div style={{ height: 100 }} />

            {/* Highlights Section */}
            <div
              style={{
                backgroundColor: 'var(--light-blue)',
                paddingTop: 50,
                paddingBottom: 50,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 className={styles.center_text}>
                But What Makes Us Different?
              </h2>
              <p
                className={styles.center_text}
                style={{ color: 'var(--med-blue)' }}
              >
                Need a good reason? Well here's a few:
              </p>

              <Highlights />
              <a href="tel:+18648008733" target="_blank">
                <button
                  style={{ fontSize: 25, width: 500 }}
                  className={styles.highlight_button}
                >
                  Call Now for a Free Quote
                </button>
              </a>
            </div>

            <div style={{ height: 100 }} />

            {/* About the Owner */}
            <div>
              <ResponsiveCard
                image={OwnerImage}
                title={'Meet the Owner'}
                text={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                }
              />
            </div>

            <div style={{ height: 100 }} />

            {/* Review Section */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h2 className={styles.center_text}>What People Are Saying</h2>
              <p
                style={{
                  width: 400,
                  textAlign: 'center',
                  color: 'var(--med-blue)',
                }}
              >
                We value our customers, and it shows!
              </p>

              <div style={{ height: 20 }} />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  width: '100%',
                }}
              >
                <ReviewCard
                  icon={CarrieIcon}
                  text={
                    'Very professional team! Speedy and efficient service. Had multiple tress and hanging limbs that needed to be removed, and the job was done by lunchtime! Highly recommend.'
                  }
                  name={'Carrie Bailey'}
                />
                <ReviewCard
                  icon={TomIcon}
                  text={
                    'Great service..hardworking guy..reasonable prices..would definitely recommend his services.'
                  }
                  name={'Tom McGill'}
                />

              </div>

              <div style={{ height: 20 }} />

              <a href="/reviews" className={styles.see_more}>
                See More
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: 50,
                marginTop: 100,
                marginBottom: 50,
              }}
            >
              <h2>
                Don't wait, schedule <br />
                your Free Quote Today!
              </h2>
              <p style={{ width: 650 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div style={{ height: 25 }} />
              <a href="tel:+18648008733" target="_blank">
                <button style={{ fontSize: 25 }}>Call Now</button>
              </a>
            </div>

            <div style={{ height: 25 }} />
          </PageLayout>
        </>
      )}

      {isMobile && (
        <>
          <MobileLandingPage />

          {/* What We Do Section */}
          <div>
            <h3
              className={styles.center_text}
              style={{ marginTop: 100, color: 'white' }}
            >
              What We Do Best
            </h3>
            <div style={{ height: 25 }} />

            <ResponsiveCard
              image={RemovalImage}
              title={'Emergency Mitigation'}
              text={'Lorem ipsum dolor sit amet'}
            />
            <ResponsiveCard
              image={RemovalImage}
              title={'Complete Tree Removal'}
              text={
                'You can rely on us to safely and efficiently remove your trees while treating your property with the utmost care!'
              }
            />
            <ResponsiveCard
              image={PruningImage}
              title={'Tree Pruning'}
              text={
                'Whether cleaning up after years of neglect or yearly pruning, we can redeem your trees to a healthy and safe state in many cases!'
              }
            />
            <ResponsiveCard
              image={AssessmentImage}
              title={'Tree Assessment'}
              text={
                "Fungus, rot, stunted growth or just not sure what is going on? We can come assess, reveal what is going on that you can't see, and make a game plan for restoration or removal."
              }
            />
          </div>

          <div style={{ height: 100 }} />

          {/* Highlights Section */}
          <div
            style={{
              backgroundColor: 'var(--light-blue)',
              paddingTop: 50,
              paddingBottom: 50,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 className={styles.center_text}>But What Makes Us Different?</h2>
            <p
              className={styles.center_text}
              style={{ color: 'var(--med-blue)' }}
            >
              Need a good reason? Well here's a few:
            </p>

            <Highlights />
            <a href="tel:+18648008733" target="_blank">
              <button style={{ fontSize: 20, lineHeight: 1.5 }}>
                Call Now for a <br />
                Free Quote
              </button>
            </a>
          </div>

          <div style={{ height: 100 }} />

          {/* About the Owner */}
          <div>
            <ResponsiveCard
              image={OwnerImage}
              title={'Meet the Owner'}
              text={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              }
            />
          </div>

          <div style={{ height: 100 }} />

          {/* Review Section */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 className={styles.center_text}>What People Are Saying</h2>
            <p
              style={{
                textAlign: 'center',
                color: 'var(--black)',
              }}
            >
              We value our customers, and it shows!
            </p>

            <div style={{ height: 20 }} />

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                width: '100%',
              }}
            >
              <ReviewCard
                icon={DrakeIcon}
                text={
                  'Super appreciative of their service and timely assistance. Came to take down a tree still hanging out after Hurricane Helene, the day before we were getting hit with a big ice/snow storm! Now I feel safe and happy.'
                }
                name={'Drake Davis'}
              />
              <ReviewCard
                icon={TracyIcon}
                text={'Guardian Tree did an amazing and fast job.  They also handled getting our root ball which was over 5 feet tall and you would never have known that 2 trees were ever there!  They took 3 more trees down for us so we don’t have to worry about the next hurricane or storm!  The team was friendly and they stacked the trees for FEMA the best I’ve ever seen it done!  Thank you Guardian Emergency Tree Service for a job well done!'
                }
                name={'Tracy Goodwin'}
              />
            </div>

            <div style={{ height: 20 }} />

            <a
              href="/reviews"
              className={styles.see_more}
              style={{ color: 'white' }}
            >
              See More
            </a>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              padding: 50,
              marginTop: 50,
              // marginBottom: 50,
            }}
          >
            <h3 style={{ color: 'white' }}>Don't wait</h3>
            <h2 style={{ fontSize: 35 }}>schedule your Free Quote Today!</h2>
            <p style={{ width: '80%', color: 'var(--black)' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div style={{ height: 25 }} />
            <a href="tel:+18648008733" target="_blank">
              <button style={{ fontSize: 25 }}>Call Now</button>
            </a>
          </div>

          <div style={{ height: 50 }} />
        </>
      )}
    </main>
  );
}
