import { useRouter } from "next/router";

const ARTICLES = [
  {
    number: "01",
    image: "/images/image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
  },
  {
    number: "02",
    image: "/images/image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
  },
  {
    number: "03",
    image: "/images/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
  },
];

export default function ArticleCards() {
  const { basePath } = useRouter();

  return (
    <section className="cards">
      {ARTICLES.map((article) => (
        <article key={article.number} className="card">
          <a href="#" className="card__image">
            <img
              src={`${basePath}${article.image}`}
              alt={article.title}
              width={100}
              height={127}
            />
          </a>
          <div className="card__body">
            <span className="card__number">{article.number}</span>
            <a href="#" className="card__title">
              {article.title}
            </a>
            <p className="card__text">{article.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
