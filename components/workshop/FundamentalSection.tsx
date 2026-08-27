import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FundamentalSection() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeader eyebrow="Fundamental" heading="Fundamental Section" />
      </Container>
    </Section>
  );
}
