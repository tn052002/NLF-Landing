import { Button } from "@/components/ui/Button";
import type { NlfHcmWorkshopOfferCopy } from "@/lib/i18n";
import styles from "./WorkshopOffer.module.css";

export function WorkshopOffer({ copy }: { copy: NlfHcmWorkshopOfferCopy }) {
  return (
    <div className={styles.offer}>
      <figure className={styles.image} aria-label={copy.imageLabel}>
        <span>[ {copy.imageLabel} ]</span>
      </figure>

      <div className={styles.panel}>
        <p className={styles.kicker}>{copy.heading}</p>
        <h2>{copy.title}</h2>
        <p className={styles.description}>{copy.description}</p>

        <div className={styles.themes} aria-label={copy.themes.join(", ")}>
          {copy.themes.map((theme, index) => (
            <div className={styles.themeRow} key={theme}>
              <span>{theme}</span>
              {index < copy.themes.length - 1 ? <span className={styles.arrow}>↓</span> : null}
            </div>
          ))}
        </div>

        <dl className={styles.meta}>
          <div>
            <dt>{copy.metaLabels.location}</dt>
            <dd>{copy.city}</dd>
          </div>
          <div>
            <dt>{copy.metaLabels.date}</dt>
            <dd>{copy.date}</dd>
          </div>
          <div>
            <dt>{copy.metaLabels.time}</dt>
            <dd>{copy.duration}</dd>
          </div>
          <div>
            <dt>{copy.metaLabels.investment}</dt>
            <dd>{copy.price}</dd>
          </div>
        </dl>

        <Button className={styles.cta} href="#register">
          {copy.cta}
        </Button>
      </div>
    </div>
  );
}
