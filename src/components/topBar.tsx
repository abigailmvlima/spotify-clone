import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function TopBar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-b from-[#121212]/95 to-transparent px-6 py-4 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Voltar"
          className="flex size-8 items-center justify-center rounded-full bg-black/70 text-white"
        >
          <ChevronLeftIcon className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Avançar"
          className="flex size-8 items-center justify-center rounded-full bg-black/70 text-[#7a7a7a]"
        >
          <ChevronRightIcon className="size-5" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="hidden rounded-full border border-white/40 px-4 py-1.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:border-white sm:inline-flex"
        >
          Instalar app
        </button>
        <button
          type="button"
          className="rounded-full px-4 py-2 text-sm font-bold text-[#b3b3b3] transition-colors hover:scale-105 hover:text-white"
        >
          Inscrever-se
        </button>
        <button
          type="button"
          className="rounded-full bg-white px-6 py-2 text-sm font-bold text-black transition-transform hover:scale-105"
        >
          Entrar
        </button>
      </div>
    </header>
  );
}
