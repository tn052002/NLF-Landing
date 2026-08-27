import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQSection() {
  return (
    <Section variant="muted">
      <Container>
        <SectionHeader eyebrow="FAQ" heading="FAQ Section" />
      </Container>
    </Section>
  );
}
