import { useRouter } from "next/router";

export default function Hero() {
  const { basePath } = useRouter();

  return (
    <section className="hero">
      <picture className="hero__image">
        <source
          media="(min-width: 768px)"
          srcSet={`${basePath}/images/image-web-3-desktop.jpg`}
        />
        <img
          src={`${basePath}/images/image-web-3-mobile.jpg`}
          alt="Colourful 3D geometric blocks arranged around a central grid"
          width={686}
          height={600}/>
      </picture>

      <h1 className="hero__title">
        The Bright Future of Web 3.0?
      </h1>

      <div className="hero__content">
        <p className="hero__text">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <a href="#" className="hero__cta">
          Read more
        </a>
      </div>
    </section>
  );
}
