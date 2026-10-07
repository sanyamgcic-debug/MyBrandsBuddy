import {
  Search,
  Camera as Instagram,
  MousePointerClick,
  Sparkles,
  Monitor,
  PenTool,
  Smartphone,
  MessageCircle,
  Heart,
  Users,
  ChartNoAxesCombined,
  Target,
} from 'lucide-react';
import type { IconName } from '@/data/services';
const icons = {
  Search,
  Instagram,
  MousePointerClick,
  Sparkles,
  Monitor,
  PenTool,
  Smartphone,
  MessageCircle,
  Heart,
  Users,
  ChartNoAxesCombined,
  Target,
};
export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const Glyph = icons[name];
  return <Glyph aria-hidden="true" className={className} strokeWidth={1.7} />;
}
