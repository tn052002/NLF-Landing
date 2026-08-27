import { Container } from "@/components/ui/Container";
import { Section, type SectionVariant } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SectionCopy } from "@/lib/i18n";

export type WorkshopSectionProps = {
  copy: SectionCopy;
};

export function PlaceholderSection({
  copy,
  variant = "default",
}: WorkshopSectionProps & {
  variant?: SectionVariant;
}) {
  return (
    <Section variant={variant}>
      <Container>
        <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} />
      </Container>
    </Section>
  );
}
