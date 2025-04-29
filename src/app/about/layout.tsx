// src/app/about/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | ScholarPath",
  description: "Learn more about the ScholarPath platform and the team behind your scholarship journey.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
