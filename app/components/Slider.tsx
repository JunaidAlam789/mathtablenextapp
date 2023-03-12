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
    <div className=" justify-around mx-auto   max-w-screen-lg"> { /* {styles.articles} */}

     
        <motion.div
          
          className="flex flex-col items-center w-72 bg-pink-600 text-white p-2 m-4  rounded-lg"     /*  {styles.article} */
          initial={{
            opacity: 0,
            translateX: -550,
            translateY: 0,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: 2 * 0.2 }}
        >
          <h2>{"There is the text"}</h2>
          
        </motion.div>
        <motion.div
          
          className="flex flex-col items-center w-72 bg-pink-600 text-white p-2 m-4  rounded-lg"     /*  {styles.article} */
          initial={{
            opacity: 0,
            translateX: -550,
            translateY: 0,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: 3 * 0.2 }}
        >
          
          <p>{"Here is para text"}</p>
        </motion.div>
      
    </div>
  );
}