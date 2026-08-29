import { Container } from "@/components/ui/Container";
import { Section, type SectionVariant } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { SectionCopy } from "@/lib/i18n";

export type NlfHcmSectionProps = {
  copy: SectionCopy;
};

export function PlaceholderSection({
  copy,
  id,
  variant = "default",
}: NlfHcmSectionProps & {
  id?: string;
  variant?: SectionVariant;
}) {
  return (
    <Section id={id} variant={variant}>
      <Container>
        <SectionHeader eyebrow={copy.eyebrow} heading={copy.heading} />
      </Container>
    </Section>
  );
}
