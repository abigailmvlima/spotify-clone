import type { PlaylistItem } from "@/data/fakeData";
import { PlaylistCard } from "@/components/playlistCard";

type SectionRowProps = {
  title: string;
  playlists: PlaylistItem[];
};

export function SectionRow({ title, playlists }: SectionRowProps) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-end justify-between px-1">
        <h2 className="cursor-pointer text-2xl font-bold text-white hover:underline">
          {title}
        </h2>
        <button type="button" className="text-sm font-bold text-[#b3b3b3] hover:underline">
          Mostrar tudo
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </section>
  );
}
