"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmFeaturedTestimonialCopy } from "@/lib/i18n";
import { TestimonialVideo } from "./TestimonialVideo";
import styles from "./FeaturedTestimonialSection.module.css";

export function FeaturedTestimonialSection({ copy }: { copy: NlfHcmFeaturedTestimonialCopy }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [swipeStart, setSwipeStart] = useState<number | null>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const lastIndex = copy.stories.length - 1;

  const showPreviousStory = () => {
    setSelectedIndex((currentIndex) => (currentIndex === 0 ? lastIndex : currentIndex - 1));
  };

  const showNextStory = () => {
    setSelectedIndex((currentIndex) => (currentIndex === lastIndex ? 0 : currentIndex + 1));
  };

  const handleSwipeEnd = (clientX: number) => {
    if (swipeStart === null) {
      return;
    }

    const swipeDistance = clientX - swipeStart;

    if (Math.abs(swipeDistance) > 48) {
      if (swipeDistance > 0) {
        showPreviousStory();
      } else {
        showNextStory();
      }
    }

    setSwipeStart(null);
    setSwipeOffset(0);
  };

  const handleSwipeMove = (clientX: number) => {
    if (swipeStart === null) {
      return;
    }

    setSwipeOffset(clientX - swipeStart);
  };

  return (
    <Section className={styles.section}>
      <Container>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h2>{copy.heading}</h2>
          </header>

          <div
            aria-label={copy.carouselLabel}
            className={styles.carousel}
            onPointerCancel={() => setSwipeStart(null)}
            onPointerDown={(event) => setSwipeStart(event.clientX)}
            onPointerMove={(event) => handleSwipeMove(event.clientX)}
            onPointerUp={(event) => handleSwipeEnd(event.clientX)}
            role="region"
          >
            <button
              aria-label={copy.previousLabel}
              className={`${styles.arrow} ${styles.arrowPrevious}`}
              onClick={showPreviousStory}
              type="button"
            >
              ←
            </button>

            <div className={styles.viewport}>
              <div
                className={styles.track}
                style={{
                  transform: `translateX(calc(${selectedIndex * -100}% + ${swipeOffset}px))`,
                  transition: swipeStart === null ? undefined : "none",
                }}
              >
                {copy.stories.map((story) => (
                  <div className={styles.slide} key={story.label}>
                    <div className={styles.layout}>
                      <TestimonialVideo story={story} />

                      <article className={styles.story}>
                        <blockquote className={styles.quote}>
                          <p>"{story.quote.cameBecause}"</p>
                          <p>"{story.quote.surprisedMe}"</p>
                          <p>"{story.quote.changed}"</p>
                        </blockquote>

                        <footer className={styles.meta}>
                          <span>{story.memberName}</span>
                          <span>{story.age}</span>
                          <span>{story.context}</span>
                        </footer>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              aria-label={copy.nextLabel}
              className={`${styles.arrow} ${styles.arrowNext}`}
              onClick={showNextStory}
              type="button"
            >
              →
            </button>

            <div className={styles.dots} aria-label={copy.carouselLabel}>
              {copy.stories.map((story, index) => (
                <button
                  aria-label={story.label}
                  aria-current={selectedIndex === index ? "true" : undefined}
                  className={styles.dot}
                  key={story.label}
                  onClick={() => setSelectedIndex(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
