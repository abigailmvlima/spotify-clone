import type { PlaylistItem } from "@/data/fakeData";
import { CoverArt } from "@/components/coverArt";
import { PlayIcon } from "@/components/icons";

type PlaylistCardProps = {
  playlist: PlaylistItem;
};

export function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <article className="group cursor-pointer rounded-lg bg-transparent p-3 transition-colors duration-200 hover:bg-[#1a1a1a]">
      <div className="relative mb-3">
        <CoverArt
          title={playlist.title}
          color={playlist.coverColor}
          accent={playlist.coverAccent}
        />
        <button
          type="button"
          aria-label={`Tocar ${playlist.title}`}
          className="absolute bottom-2 right-2 flex size-12 translate-y-2 items-center justify-center rounded-full bg-[#1ed760] text-black opacity-0 shadow-[0_8px_16px_rgba(0,0,0,0.45)] transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-105 hover:bg-[#3be477]"
        >
          <PlayIcon className="size-6 translate-x-px" />
        </button>
      </div>
      <h3 className="truncate text-base font-bold text-white">{playlist.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-[#b3b3b3]">{playlist.description}</p>
    </article>
  );
}
