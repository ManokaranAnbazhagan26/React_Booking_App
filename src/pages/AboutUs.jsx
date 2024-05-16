import React from 'react';
import CommonHeading from '../components/common/CommonHeading';

const AboutUs = () => {
  return (
    <div className="container">
      
      <div className="row mt-5" >
        <CommonHeading
          heading="About Us"
          title="Our"
          subtitle="Story"
        />
        <div className="col-md-8 mt-5 mb-5">
          <p>This fairytale, like all fairytales, started with a few dudes in distress. One was lamenting his dear departed tennis partner, the second grieving for the badminton racquet left behind, the third desolate after another football weekend that never happened, the fourth broke and gymless from another membership waylaid, and the fifth just #bored to death. Alas, unlike in other fairytales, no fair damsel came to their rescue and they wallowed for a while in their sorrow. And so they finally did what all forsaken souls do...start building their very own Neverland, a place for all restless adrenaline junkies like themselves...and thus a thought, nay a belief called Playo was sown.</p>
          <p>A belief to create a playground where you can fit-in with other fellow misfits, where access is not limited by narrow memberships walls. A belief that you can play when you want...where you want...how you want, and not have to suffer the agony of wait. A belief to create a world where you can lose yourself and yet rediscover yourself, where you can be both the victor and the vanquished and laugh at being both. A belief...that happiness is a dish best served on the field.</p>
          <p>We warmly welcome you to Playo, your singular destination for sports, fitness, fun and all things recreational. Come, relive those cherished childhood moments when you exchanged high fives or wept as one for a loss. Time to get your lovable varsity jersey out and give your neighbour a shout or go challenge your colleague...better still make a new friend. Get Addicted to Play...and create your own happily ever after!</p>
          <p>Fitness, fun, and all things recreational. Come, relive those cherished childhood moments when you exchanged high fives or wept as one for a loss. Time to get your lovable varsity jersey out and give your neighbour a shout or go challenge your colleague...better still make a new friend. Get Addicted to Play.</p>
        </div>
        <div className="col-md-4">
          <img style={{ justifyContent: "center", display: "flex", alignItems: "center", marginLeft: "auto", marginRight: "auto" }} src="https://wallpapers.com/images/high/grayscale-dhoni-hd-qd9jeohn3yimcyq4.webp" alt="img" width={350} />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
