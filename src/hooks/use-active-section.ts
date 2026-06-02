"use client";

import { useEffect, useState } from "react";

const sectionIds = ["home", "about", "pillars", "impact", "events", "team", "gallery", "join"];

/**
 * Tracks which section is currently most visible in the viewport.
 * Returns the active section ID string.
 */
export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibilityMap = new Map<string, number>();

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibilityMap.set(id, entry.intersectionRatio);
          });

          // Find the section with the highest visibility
          let maxRatio = 0;
          let maxId = "home";
          visibilityMap.forEach((ratio, sectionId) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              maxId = sectionId;
            }
          });

          if (maxRatio > 0) {
            setActiveSection(maxId);
          }
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6],
          rootMargin: "-80px 0px -20% 0px",
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
}
