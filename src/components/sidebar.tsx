import {
  libraryItems,
  navItems,
} from "@/data/fakeData";
import {
  HomeIcon,
  LibraryIcon,
  PlusIcon,
  SearchIcon,
  SpotifyLogo,
} from "@/components/icons";
import { CoverArt } from "@/components/coverArt";

const iconMap = {
  home: HomeIcon,
  search: SearchIcon,
  library: LibraryIcon,
};

export function Sidebar() {
  return (
    <aside className="flex h-full w-[280px] shrink-0 flex-col gap-2 text-sm">
      <div className="rounded-lg bg-[#121212] px-3 py-2">
        <div className="mb-2 flex items-center gap-2 px-3 py-3 text-white">
          <SpotifyLogo className="size-8" />
          <span className="text-lg font-bold tracking-tight">Spotify</span>
        </div>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <a
                key={item.id}
                href="#"
                className={`flex items-center gap-4 rounded-md px-3 py-2 font-bold transition-colors ${
                  item.active
                    ? "text-white"
                    : "text-[#b3b3b3] hover:text-white"
                }`}
              >
                <Icon className="size-6" />
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>

      <div className="flex min-h-0 flex-1 flex-col rounded-lg bg-[#121212] px-2 pb-2 pt-3">
        <div className="mb-3 flex items-center justify-between px-2">
          <button
            type="button"
            className="flex items-center gap-3 font-bold text-[#b3b3b3] transition-colors hover:text-white"
          >
            <LibraryIcon className="size-6" />
            Sua Biblioteca
          </button>
          <button
            type="button"
            aria-label="Criar playlist"
            className="rounded-full p-2 text-[#b3b3b3] transition-colors hover:bg-white/10 hover:text-white"
          >
            <PlusIcon className="size-5" />
          </button>
        </div>

        <div className="mb-3 flex gap-2 px-2">
          <button
            type="button"
            className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20"
          >
            Playlists
          </button>
          <button
            type="button"
            className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/20"
          >
            Artistas
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {libraryItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="flex w-full items-center gap-3 rounded-md p-2 text-left transition-colors hover:bg-white/10"
            >
              <CoverArt
                title={item.title}
                color={item.coverColor}
                accent={item.coverColor}
                className="size-12 shrink-0"
                rounded={item.type === "artist" ? "full" : "md"}
              />
              <span className="min-w-0">
                <span className="block truncate font-medium text-white">
                  {item.title}
                </span>
                <span className="block truncate text-xs text-[#b3b3b3]">
                  {item.subtitle}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
