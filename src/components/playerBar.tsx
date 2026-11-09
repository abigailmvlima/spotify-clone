import { currentTrack } from "@/data/fakeData";
import { CoverArt } from "@/components/coverArt";
import {
  HeartIcon,
  PauseIcon,
  PlayIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipBackIcon,
  SkipForwardIcon,
  VolumeIcon,
} from "@/components/icons";

export function PlayerBar() {
  return (
    <footer className="grid h-[90px] shrink-0 grid-cols-[1fr_2fr_1fr] items-center gap-4 border-t border-white/5 bg-[#181818] px-4 text-white">
      <div className="flex min-w-0 items-center gap-3">
        <CoverArt
          title={currentTrack.title}
          color={currentTrack.coverColor}
          accent={currentTrack.coverAccent}
          className="size-14 shrink-0"
        />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium hover:underline">
            {currentTrack.title}
          </p>
          <p className="truncate text-xs text-[#b3b3b3] hover:underline">
            {currentTrack.artist}
          </p>
        </div>
        <button
          type="button"
          aria-label="Curtir"
          className="hidden text-[#1ed760] sm:inline-flex"
        >
          <HeartIcon className="size-4" />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Aleatório"
            className="text-[#b3b3b3] transition-colors hover:text-white"
          >
            <ShuffleIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Anterior"
            className="text-[#b3b3b3] transition-colors hover:text-white"
          >
            <SkipBackIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Pausar"
            className="flex size-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105"
          >
            <PauseIcon className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Próxima"
            className="text-[#b3b3b3] transition-colors hover:text-white"
          >
            <SkipForwardIcon className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Repetir"
            className="text-[#b3b3b3] transition-colors hover:text-white"
          >
            <RepeatIcon className="size-4" />
          </button>
        </div>

        <div className="flex w-full max-w-xl items-center gap-2 text-[11px] text-[#b3b3b3]">
          <span>{currentTrack.progress}</span>
          <div className="group relative h-1 flex-1 overflow-hidden rounded-full bg-[#4d4d4d]">
            <div
              className="h-full rounded-full bg-white transition-colors group-hover:bg-[#1ed760]"
              style={{ width: `${currentTrack.progressPercent}%` }}
            />
          </div>
          <span>{currentTrack.duration}</span>
        </div>
      </div>

      <div className="hidden items-center justify-end gap-2 md:flex">
        <VolumeIcon className="size-4 text-[#b3b3b3]" />
        <div className="group relative h-1 w-24 overflow-hidden rounded-full bg-[#4d4d4d]">
          <div className="h-full w-2/3 rounded-full bg-white group-hover:bg-[#1ed760]" />
        </div>
        <PlayIcon className="sr-only" />
      </div>
    </footer>
  );
}
