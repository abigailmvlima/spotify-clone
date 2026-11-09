import {
  madeForYou,
  quickAccess,
  recentlyPlayed,
} from "@/data/fakeData";
import { QuickAccessGrid } from "@/components/quickAccessGrid";
import { SectionRow } from "@/components/sectionRow";
import { TopBar } from "@/components/topBar";

export function MainContent() {
  return (
    <main className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg bg-[#121212]">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-[#3a1c5c] via-[#231433] to-transparent" />
      <TopBar />
      <div className="relative z-[1] flex-1 overflow-y-auto px-6 pb-6">
        <h1 className="mb-6 text-3xl font-bold text-white">Boa tarde</h1>
        <QuickAccessGrid items={quickAccess} />
        <SectionRow title="Feito para você" playlists={madeForYou} />
        <SectionRow title="Tocados recentemente" playlists={recentlyPlayed} />
      </div>
    </main>
  );
}
