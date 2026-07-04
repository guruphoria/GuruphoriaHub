'use client';

import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: ReactNode;
  subtitle?: string;
  description?: string;
}

export const SectionHeader = ({ title, subtitle, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-12 sm:mb-16 space-y-4">
      {subtitle && (
        <div className="text-sm font-bold tracking-wider text-primary uppercase">{subtitle}</div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">{description}</p>
      )}
    </div>
  );
};