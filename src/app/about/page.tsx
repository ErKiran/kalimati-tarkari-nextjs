// pages/about.js

import Head from 'next/head';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>About Us - Open Source Kalimati Tarkari</title>
        <meta name="description" content="Learn more about Your Company and our projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Historical Data 
        Compare with Time
      </p>

      <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
      <p className="text-lg mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam in turpis auctor, vehicula tellus eu, fermentum purus.
        Duis ultrices nisl ut felis aliquet, vel faucibus purus convallis.
      </p>

      <div className="flex items-center space-x-4">
        <a href="https://github.com/ErKiran/kalimati" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
      </div>
    </div>
  );
};

export default About;
