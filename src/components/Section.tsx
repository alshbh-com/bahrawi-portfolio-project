
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const Section = ({ id, title, children, className, align = 'right' }: SectionProps) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <section id={id} className={cn('py-16', className)}>
      <div className="container mx-auto px-4">
        <div className={cn('mb-12', alignmentClasses[align])}>
          <h2 className="section-title">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
