import * as L from "lucide-react";
import type { LucideProps } from "lucide-react";

export default function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (L as unknown as Record<string, React.ComponentType<LucideProps>>)[name] ?? L.Circle;
  return <Cmp {...props} />;
}
