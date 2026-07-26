import { useState } from "react";
import Header from "@/pages/newsPage/NewsBody/Header";
import Hero from "@/pages/newsPage/NewsBody/Hero";
import Sidebar from "@/pages/newsPage/NewsBody/Sidebar";
import ArticleCards from "@/pages/newsPage/NewsBody/ArticleCards";
import Footer from "@/pages/newsPage/NewsBody/Footer";

export default function NewsBody() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="page">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="layout">
        <Hero />
        <Sidebar />
        <ArticleCards />
      </main>
      <Footer />
    </div>
  );
}
