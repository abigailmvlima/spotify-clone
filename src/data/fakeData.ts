export type PlaylistItem = {
  id: string;
  title: string;
  description: string;
  coverColor: string;
  coverAccent: string;
};

export type LibraryItem = {
  id: string;
  title: string;
  subtitle: string;
  type: "playlist" | "artist" | "album";
  coverColor: string;
};

export type NavItem = {
  id: string;
  label: string;
  icon: "home" | "search" | "library";
  active?: boolean;
};

export const navItems: NavItem[] = [
  { id: "home", label: "Início", icon: "home", active: true },
  { id: "search", label: "Buscar", icon: "search" },
  { id: "library", label: "Sua Biblioteca", icon: "library" },
];

export const libraryItems: LibraryItem[] = [
  {
    id: "lib-1",
    title: "Músicas Curtidas",
    subtitle: "Playlist • 128 músicas",
    type: "playlist",
    coverColor: "#5038a0",
  },
  {
    id: "lib-2",
    title: "Discover Weekly",
    subtitle: "Playlist • Spotify",
    type: "playlist",
    coverColor: "#1e3264",
  },
  {
    id: "lib-3",
    title: "Anitta",
    subtitle: "Artista",
    type: "artist",
    coverColor: "#e91429",
  },
  {
    id: "lib-4",
    title: "This Is Ludmilla",
    subtitle: "Playlist • Spotify",
    type: "playlist",
    coverColor: "#ba5d07",
  },
  {
    id: "lib-5",
    title: "Daily Mix 1",
    subtitle: "Playlist • Spotify",
    type: "playlist",
    coverColor: "#8d67ab",
  },
  {
    id: "lib-6",
    title: "Top Brasil",
    subtitle: "Playlist • Spotify",
    type: "playlist",
    coverColor: "#148a08",
  },
];

export const madeForYou: PlaylistItem[] = [
  {
    id: "mfy-1",
    title: "Discover Weekly",
    description: "Sua mixtape semanal de músicas novas. Atualiza toda segunda.",
    coverColor: "#1e3264",
    coverAccent: "#509bf5",
  },
  {
    id: "mfy-2",
    title: "Daily Mix 1",
    description: "Anitta, Ludmilla, IZA e mais",
    coverColor: "#8d67ab",
    coverAccent: "#c4b0e0",
  },
  {
    id: "mfy-3",
    title: "Daily Mix 2",
    description: "Coldplay, Imagine Dragons, The Weeknd e mais",
    coverColor: "#ba5d07",
    coverAccent: "#e6984d",
  },
  {
    id: "mfy-4",
    title: "Radar de Novidades",
    description: "Lançamentos dos artistas que você segue",
    coverColor: "#e91429",
    coverAccent: "#f15e6c",
  },
  {
    id: "mfy-5",
    title: "Mix de Anitta",
    description: "Artistas parecidos com Anitta",
    coverColor: "#5038a0",
    coverAccent: "#a78bfa",
  },
  {
    id: "mfy-6",
    title: "Repeat Rewind",
    description: "As músicas que você não larga",
    coverColor: "#148a08",
    coverAccent: "#1ed760",
  },
];

export const recentlyPlayed: PlaylistItem[] = [
  {
    id: "rp-1",
    title: "Top 50 - Brasil",
    description: "As músicas mais tocadas no Brasil agora",
    coverColor: "#8400e7",
    coverAccent: "#c77dff",
  },
  {
    id: "rp-2",
    title: "Funk Hits",
    description: "Os maiores hits do funk",
    coverColor: "#e13300",
    coverAccent: "#ff7a45",
  },
  {
    id: "rp-3",
    title: "Viral Brasil",
    description: "O que está bombando nas redes",
    coverColor: "#1e3264",
    coverAccent: "#509bf5",
  },
  {
    id: "rp-4",
    title: "Sertanejo Universitário",
    description: "O melhor do sertanejo atual",
    coverColor: "#b49bc8",
    coverAccent: "#d4c4e0",
  },
  {
    id: "rp-5",
    title: "MPB Essentials",
    description: "Clássicos e contemporâneos da MPB",
    coverColor: "#0d7377",
    coverAccent: "#32e0c4",
  },
  {
    id: "rp-6",
    title: "Foco Total",
    description: "Instrumental para concentração",
    coverColor: "#283593",
    coverAccent: "#7986cb",
  },
];

export const quickAccess: PlaylistItem[] = [
  {
    id: "qa-1",
    title: "Músicas Curtidas",
    description: "",
    coverColor: "#5038a0",
    coverAccent: "#a78bfa",
  },
  {
    id: "qa-2",
    title: "Discover Weekly",
    description: "",
    coverColor: "#1e3264",
    coverAccent: "#509bf5",
  },
  {
    id: "qa-3",
    title: "Daily Mix 1",
    description: "",
    coverColor: "#8d67ab",
    coverAccent: "#c4b0e0",
  },
  {
    id: "qa-4",
    title: "Top Brasil",
    description: "",
    coverColor: "#148a08",
    coverAccent: "#1ed760",
  },
  {
    id: "qa-5",
    title: "Funk Hits",
    description: "",
    coverColor: "#e13300",
    coverAccent: "#ff7a45",
  },
  {
    id: "qa-6",
    title: "This Is Ludmilla",
    description: "",
    coverColor: "#ba5d07",
    coverAccent: "#e6984d",
  },
];

export const currentTrack = {
  title: "Envolver",
  artist: "Anitta",
  coverColor: "#e91429",
  coverAccent: "#f15e6c",
  duration: "3:14",
  progress: "1:22",
  progressPercent: 42,
};
