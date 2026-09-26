import { Clock, Mail, Phone } from "lucide-react";
import { site } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="bg-navy-900 text-xs text-white/85">
      <div className="section flex h-9 items-center justify-center gap-5 sm:justify-end">
        <span className="hidden items-center gap-1.5 md:flex"><Clock size={13} className="text-accent" />{site.hours}</span>
        <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-white"><Phone size={13} className="text-accent" />{site.phone}</a>
        <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 hover:text-white"><Mail size={13} className="text-accent" />{site.email}</a>
      </div>
    </div>
  );
}
