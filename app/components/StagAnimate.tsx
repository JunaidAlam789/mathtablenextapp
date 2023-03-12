"use client"
import { motion } from "framer-motion";
import styles from "../styles/Home.module.css";

const articles = [
  { id: 1, title: "Great times", excerpt: "Await you" },
  { id: 2, title: "Great times", excerpt: "Await you" },
  { id: 3, title: "Great times", excerpt: "Await you" },
  { id: 4, title: "Great times", excerpt: "Await you" },
  { id: 5, title: "Great times", excerpt: "Await you" },
  { id: 6, title: "Great times", excerpt: "Await you" },
];

export default function Stag() {
  return (
    <div className="flex flex-wrap justify-around mx-auto   max-w-screen-lg"> { /* {styles.articles} */}

      {articles.map((article, i) => (
        <motion.div
          key={article.id}
          className="flex flex-col items-center w-72 bg-pink-600 text-white p-2 m-4  rounded-lg"     /*  {styles.article} */
          initial={{
            opacity: 0,
            translateX: i % 2 === 0 ? -50 : 50,
            translateY: -50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
        >
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </motion.div>
      ))}
    </div>
  );
}