import { useState, useEffect } from "react";
import "./Gallery.css";

// 1) SLIDER ki 4 images (current camp/image yahan chalegi)
const slides = [
  { img: "/images/gallery/slide1.jpg", title: "Health Camp - Tikamgarh" },
  { img: "/images/gallery/slide2.jpg", title: "Education Drive" },
  { img: "/images/gallery/slide3.jpg", title: "Tree Plantation" },
  { img: "/images/gallery/slide4.jpg", title: "Women Empowerment Workshop" },
];

// 2) CARDS ka data (apni image aur description yahan likho)
const cards = [
  {
    img: "/images/gallery/card1.jpg",
    title: "Health Camp",
    desc: "Gaon ke logon ke liye free health checkup aur dawai vitran.",
  },
  {
    img: "/images/gallery/card2.jpg",
    title: "Education Support",
    desc: "Bachchon ko kitabein, copies aur padhai ki madad.",
  },
  {
    img: "/images/gallery/card3.jpg",
    title: "Environment Drive",
    desc: "Paudharopan aur safai abhiyan se hara-bhara gaon.",
  },
  {
    img: "/images/gallery/card4.jpg",
    title: "Women Empowerment",
    desc: "Mahilaon ke liye skill training aur rozgaar ke avsar.",
  },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  // Har 3 second mein slider khud chalega
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);

  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-heading">Our Gallery</h2>

      {/* ===== SLIDER (sabse pehle) ===== */}
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div className="slide" key={i}>
              <img src={s.img} alt={s.title} />
              <div className="slide-caption">{s.title}</div>
            </div>
          ))}
        </div>

        <button className="arrow left" onClick={prev}>‹</button>
        <button className="arrow right" onClick={next}>›</button>

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === current ? "dot active" : "dot"}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* ===== CARDS (slider ke neeche, heading ke saath) ===== */}
      <div className="cards-section">
        <h2 className="cards-heading">Our Work & Activities</h2>
        <p className="cards-subheading">
          Janak Foundation ke dwara kiye gaye kuch mukhya karya
        </p>

        <div className="cards">
          {cards.map((c, i) => (
            <div className="card" key={i}>
              <img src={c.img} alt={c.title} />
              <div className="card-body">
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
