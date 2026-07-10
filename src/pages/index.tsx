import Head from 'next/head';

import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Gabriel (oghenenoghie) - Web Developer & Designer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Gabriel, a web developer, designer & instructor building full-stack applications and client websites - including a School Management System, Training LMS, and eCommerce platform."
        />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Gabriel (oghenenoghie) - Web Developer & Designer Portfolio" />
        <meta
          property="og:description"
          content="Full-stack web developer & designer portfolio - projects, technologies and contact info."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gabriel (oghenenoghie) - Web Developer & Designer Portfolio" />
        <meta
          name="twitter:description"
          content="Full-stack web developer & designer portfolio - projects, technologies and contact info."
        />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      </Head>
      <Section $grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
