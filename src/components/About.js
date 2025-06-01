import React from 'react';

import mentshirt from '../components/mensT-shirt.jpg';

const About = () => {
    return (
        <>
            {/* this content is for laptop */}
            <div className="about-con">
                <img src={mentshirt} alt="my img" className='bg-img'/>

                <div className="about-page">
                    <div className="about-txt">
                        <h2>Who we are...?</h2>
                        <p>At Cozy Wear, we are the dreamers and doers  who believe in blending style with purpose. We draw our inspiration from the streets, where every graffiti wall, every sidewalk, and every vibe speaks its own language. CozyWear is for everyone who wants to express their individuality, whether it’s the hustle of the day or the chill of the night . Born from a passion for urban culture and streetwear, we create clothing that speaks individuality and celebrate authenticity </p>

                        <h2>Our Story</h2>
                        <p>Our journey hasn’t been easy, but every late night, every sketch, and every detail reflects our commitment to quality and innovation. CozyWear is for those who hustle hard and chill harder—where comfort meets courage, and street style becomes a lifestyle.  <br />
                            <hr />
                            CozyWear is more than a brand—it’s a movement born from dedication, passion, and the relentless pursuit of excellence. We’re here to redefine urban fashion, creating pieces that don’t just dress you but empower you to own your story.
                            <br />    <hr />
                            Inspired by the raw energy of the streets, every stitch in our collection tells a tale of creativity, resilience, and individuality. From the bold graffiti on city walls to the quiet rhythm of late-night streets, we’ve poured our hearts into capturing the soul of street culture.
                        </p>
                    </div>

                </div>
            </div>


            {/* laptop content has ended */}
           
        </>
    )
}

export default About 