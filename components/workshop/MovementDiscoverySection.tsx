import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function MovementDiscoverySection() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeader eyebrow="Movement Discovery" heading="Movement Discovery Section" />
      </Container>
    </Section>
  );
}
