import { useState, useEffect } from "react";
import "./Gallery.css";

// Yahan apni images, title aur description badlo
const items = [
  { img: "/images/gallery/camp1.jpg", title: "Health Camp", desc: "Free health checkup camp in Tikamgarh." },
  { img: "/images/gallery/camp2.jpg", title: "Education Drive", desc: "Books and learning support for children." },
  { img: "/images/gallery/camp3.jpg", title: "Tree Plantation", desc: "Plantation drive for a greener village." },
  { img: "/images/gallery/camp4.jpg", title: "Women Empowerment", desc: "Skill training workshop for women." },
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);

  // Har 3 second mein slider khud agle slide par jayega
  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % items.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((current - 1 + items.length) % items.length);
  const next = () => setCurrent((current + 1) % items.length);

  return (
    <section className="gallery" id="gallery">
      <h2 className="gallery-heading">Our Gallery</h2>

      {/* Slider */}
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {items.map((item, i) => (
            <div className="slide" key={i}>
              <img src={item.img} alt={item.title} />
              <div className="slide-caption">{item.title}</div>
            </div>
          ))}
        </div>

        <button className="arrow left" onClick={prev}>‹</button>
        <button className="arrow right" onClick={next}>›</button>

        <div className="dots">
          {items.map((_, i) => (
            <span
              key={i}
              className={i === current ? "dot active" : "dot"}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>

      {/* 4 Cards */}
      <div className="cards">
        {items.map((item, i) => (
          <div className="card" key={i}>
            <img src={item.img} alt={item.title} />
            <div className="card-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
