import { MainContent } from "@/components/mainContent";
import { PlayerBar } from "@/components/playerBar";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen flex-col gap-2 overflow-hidden bg-black p-2">
      <div className="flex min-h-0 flex-1 gap-2">
        <div className="hidden md:flex">
          <Sidebar />
        </div>
        <MainContent />
      </div>
      <PlayerBar />
    </div>
  );
}
