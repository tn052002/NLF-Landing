import type { TestimonialStoryCopy } from "@/lib/i18n";
import styles from "./TestimonialVideo.module.css";

export function TestimonialVideo({ story }: { story: TestimonialStoryCopy }) {
  return (
    <figure className={styles.video} aria-label={story.previewLabel}>
      <div className={styles.poster}>
        <span className={styles.play} aria-hidden="true">
          ▶
        </span>
        <span className={styles.label}>[ {story.previewLabel} ]</span>
      </div>
    </figure>
  );
}
