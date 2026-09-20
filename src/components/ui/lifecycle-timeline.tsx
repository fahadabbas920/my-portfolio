"use client";

import { useEffect, useState } from "react";
import { projectLifecycle } from "@/data/project-lifecycle";
import { LifecycleIcon } from "@/components/ui/icons";

const AUTO_ADVANCE_MS = 2000;

export function LifecycleTimeline() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const stage = projectLifecycle[active];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setTimeout(() => {
      setActive((current) => (current + 1) % projectLifecycle.length);
    }, AUTO_ADVANCE_MS);

    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <div>
      <div className="overflow-x-auto pt-2 pb-2">
        <div className="flex min-w-max items-start sm:min-w-0">
          {projectLifecycle.map((item, index) => {
            const isActive = index === active;
            const isDone = index < active;
            const isLast = index === projectLifecycle.length - 1;

            return (
              <div
                key={item.title}
                className={`flex items-start ${isLast ? "shrink-0" : "flex-1"}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                  onFocus={() => setPaused(true)}
                  onBlur={() => setPaused(false)}
                  aria-current={isActive ? "step" : undefined}
                  className="group relative flex w-16 shrink-0 flex-col items-center gap-2.5 sm:w-auto"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isActive
                        ? "scale-110 border-accent bg-accent text-accent-fg ring-4 ring-accent/15"
                        : isDone
                          ? "border-accent/40 bg-surface text-accent"
                          : "border-border bg-surface text-fg-subtle group-hover:border-border-strong group-hover:text-fg"
                    }`}
                  >
                    <LifecycleIcon name={item.icon} className="h-5 w-5" />
                  </span>

                  <span
                    className={`whitespace-nowrap font-mono text-[11px] transition-colors ${
                      isActive ? "text-accent" : "text-fg-subtle group-hover:text-fg-muted"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </button>

                {!isLast && (
                  <div
                    aria-hidden="true"
                    className={`mx-1 mt-6 h-px min-w-8 flex-1 transition-colors duration-500 sm:mx-2 sm:min-w-0 ${
                      isDone ? "bg-accent" : "bg-border"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div key={stage.title} className="lifecycle-panel mt-10 max-w-xl">
        <p className="font-mono text-xs text-accent">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(projectLifecycle.length).padStart(2, "0")}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{stage.title}</h3>

        <p className="mt-3 text-base leading-relaxed text-fg-muted">{stage.description}</p>
      </div>
    </div>
  );
}
