
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  date: string;
  children: React.ReactNode;
  index: number;
}

const TimelineItem = ({ title, date, children, index }: TimelineItemProps) => {
  return (
    <div className="timeline-item" style={{ '--animation-delay': index } as React.CSSProperties}>
      <div className="timeline-content">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <span className="text-neon text-sm font-medium">{date}</span>
        </div>
        <div className="mt-2 text-gray-300">{children}</div>
      </div>
    </div>
  );
};

export default TimelineItem;
