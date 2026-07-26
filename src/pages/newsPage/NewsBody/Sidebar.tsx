const NEW_ARTICLES = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__heading">New</h2>
      <ul className="sidebar__list">
        {NEW_ARTICLES.map((article) => (
          <li key={article.title} className="sidebar__item">
            <a href="#" className="sidebar__title">
              {article.title}
            </a>
            <p className="sidebar__text">{article.text}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
