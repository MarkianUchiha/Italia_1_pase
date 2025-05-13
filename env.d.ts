/// <reference types="astro/client" />
/// <reference types="vite/client" />

// Declaración para archivos MP3
declare module '*.mp3' {
  const songUrl: string;
  export default songUrl;
}
