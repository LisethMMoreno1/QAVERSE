import { cn } from "../../lib/utils";

interface TocItem {
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <nav className="space-y-1">
      {items.map((item, index) => (
        <a
          key={index}
          href={`#${slugify(item.title)}`}
          className={cn(
            "block py-1 text-sm hover:text-gray-900",
            item.level === 0 ? "text-gray-700" : "text-gray-500 pl-4"
          )}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}
