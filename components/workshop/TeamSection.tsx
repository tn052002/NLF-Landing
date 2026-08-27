import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TeamSection() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeader eyebrow="Team" heading="Team Section" />
      </Container>
    </Section>
  );
}
