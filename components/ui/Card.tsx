import Image from "next/image";
import styles from "./Card.module.css";

interface CardProps {
  src: string;
  alt?: string;
}

export default function Card({ src, alt = "" }: CardProps) {
  return (
    <div className={styles.card}>
      <Image
        src={src}
        alt={alt}
        fill
        className={styles.image}
        sizes="(max-width: 1024px) 100vw, 33vw"
        priority={false}
      />
    </div>
  );
}
