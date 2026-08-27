import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WorkshopHeader() {
  return (
    <Section>
      <Container>
        <SectionHeader eyebrow="Workshop" heading="Workshop Header" />
      </Container>
    </Section>
  );
}
