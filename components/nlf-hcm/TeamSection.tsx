import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { NlfHcmTeamCopy, TeamMemberCopy } from "@/lib/i18n";
import styles from "./TeamSection.module.css";

function TeamImage({ label, large = false }: { label: string; large?: boolean }) {
  return (
    <figure className={large ? styles.featuredImage : styles.memberImage} aria-label={label}>
      <span>[ {label} ]</span>
    </figure>
  );
}

function MemberProfile({ member }: { member: TeamMemberCopy }) {
  return (
    <article className={styles.member}>
      <TeamImage label={member.imageLabel} />
      <div>
        <h3>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
        <p className={styles.bio}>{member.bio}</p>
      </div>
    </article>
  );
}

export function TeamSection({ copy }: { copy: NlfHcmTeamCopy }) {
  return (
    <Section className={styles.section} variant="muted">
      <Container>
        <div className={styles.content}>
          <h2>{copy.heading}</h2>

          <div className={styles.featured}>
            <TeamImage label={copy.featured.imageLabel} large />
            <article className={styles.featuredBio}>
              <p className={styles.kicker}>{copy.featured.role}</p>
              <h3>{copy.featured.name}</h3>
              <p>{copy.featured.bio}</p>
            </article>
          </div>

          <div className={styles.grid}>
            {copy.members.map((member) => (
              <MemberProfile key={member.name} member={member} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
