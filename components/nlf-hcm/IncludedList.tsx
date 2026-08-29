import styles from "./IncludedList.module.css";

export function IncludedList({ items }: { items: string[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item}>
          <span aria-hidden="true">✓</span>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}
