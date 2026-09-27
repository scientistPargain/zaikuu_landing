import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label="ZaiKuu home">
          <Image
            src="/logo.png"
            alt=""
            width={36}
            height={36}
            priority
            className="h-9 w-9 rounded-lg"
          />
          <span className="font-heading text-lg font-bold text-foreground">
            ZaiKuu
          </span>
        </Link>
        <Link
          href="/login"
          className="rounded-full bg-primary-dark px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          Log in
        </Link>
      </div>
    </header>
  );
}
