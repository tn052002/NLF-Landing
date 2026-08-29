import styles from "./VideoPlayer.module.css";

type VideoPlayerProps = {
  className?: string;
  label: string;
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function VideoPlayer({ className, label }: VideoPlayerProps) {
  return (
    <figure className={cx(styles.video, className)} aria-label={label}>
      <div className={styles.poster}>
        <span className={styles.play} aria-hidden="true">
          ▶
        </span>
        <span className={styles.label}>[ {label} ]</span>
      </div>
    </figure>
  );
}
