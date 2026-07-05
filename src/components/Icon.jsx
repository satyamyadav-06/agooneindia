// Only the icons referenced from data files are imported here, so the bundle
// stays small (avoids pulling in the entire lucide-react icon set).
import {
  Lightbulb,
  Users,
  BadgeIndianRupee,
  Truck,
  Factory,
  HeartHandshake,
  Cog,
  Wrench,
  LifeBuoy,
  Settings2,
  GraduationCap,
  PackageCheck,
  Sparkles,
} from 'lucide-react'

const registry = {
  Lightbulb,
  Users,
  BadgeIndianRupee,
  Truck,
  Factory,
  HeartHandshake,
  Cog,
  Wrench,
  LifeBuoy,
  Settings2,
  GraduationCap,
  PackageCheck,
}

// Render a lucide icon by its string name (used by data-driven sections).
export default function Icon({ name, ...props }) {
  const Cmp = registry[name] || Sparkles
  return <Cmp {...props} />
}
