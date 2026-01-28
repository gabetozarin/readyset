import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-6">
      <h1 className="text-[20vw] font-display font-black text-primary leading-none">404</h1>
      <p className="text-2xl font-body mt-4 mb-8">Página não encontrada</p>
      <Link href="/">
        <a className="border border-white/20 px-8 py-4 uppercase font-mono text-sm hover:bg-primary hover:border-primary transition-colors">
          Voltar ao Início
        </a>
      </Link>
    </div>
  );
}
