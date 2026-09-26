import { ChevronRight } from "lucide-react";
import { Fragment } from "react";
import Icon from "./Icon";
import { deliverables } from "@/lib/data";

export default function Deliverables() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:flex lg:items-center [&>div:last-child]:col-span-2 lg:[&>div:last-child]:col-span-1">
      {deliverables.map((d, i) => (
        <Fragment key={d.label}>
          <div className="flex flex-1 items-center gap-3 rounded-xl bg-white px-3 py-3 sm:px-5 sm:py-4 shadow-sm ring-1 ring-navy-100">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
              <Icon name={d.icon} size={22} />
            </span>
            <span className="text-sm font-semibold text-navy-800">{d.label}</span>
          </div>
          {i < deliverables.length - 1 && <ChevronRight className="hidden shrink-0 text-accent lg:block" />}
        </Fragment>
      ))}
    </div>
  );
}
