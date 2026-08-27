import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function HeroSection() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeader eyebrow="Hero" heading="Hero Section" />
      </Container>
    </Section>
  );
}
