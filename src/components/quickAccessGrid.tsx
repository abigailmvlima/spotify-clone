import type { PlaylistItem } from "@/data/fakeData";
import { CoverArt } from "@/components/coverArt";
import { PlayIcon } from "@/components/icons";

type QuickAccessGridProps = {
  items: PlaylistItem[];
};

export function QuickAccessGrid({ items }: QuickAccessGridProps) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="group flex h-16 items-center overflow-hidden rounded-md bg-white/10 transition-colors hover:bg-white/20"
        >
          <CoverArt
            title={item.title}
            color={item.coverColor}
            accent={item.coverAccent}
            className="h-full w-16 shrink-0"
            rounded="none"
          />
          <span className="flex-1 truncate px-4 text-left text-sm font-bold text-white md:text-base">
            {item.title}
          </span>
          <span className="mr-3 flex size-10 shrink-0 items-center justify-center rounded-full bg-[#1ed760] text-black opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            <PlayIcon className="size-5 translate-x-px" />
          </span>
        </button>
      ))}
    </div>
  );
}
