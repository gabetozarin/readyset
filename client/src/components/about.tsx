import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-white text-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.9] mb-8">
            Do Atlântico<br/>
            Para o Mundo
          </h2>
        </div>
        
        <div className="space-y-8 font-body text-xl md:text-2xl leading-relaxed">
          <p>
            A <span className="font-bold text-primary">ReadySet</span> é uma associação cultural sem fins lucrativos sediada em Machico, Madeira, dedicada à promoção e divulgação de atividades artísticas e culturais.
          </p>
          <p>
            Incentivamos a criação artística nas áreas da música, teatro, dança, literatura, cinema e artes plásticas, promovendo o intercâmbio cultural entre artistas locais e internacionais.
          </p>
          
          <div className="pt-8 border-t border-black/10">
            <h3 className="text-sm font-mono uppercase tracking-widest mb-4 text-primary">A Nossa Missão</h3>
            <p className="font-art text-3xl md:text-4xl leading-tight">
              "Promover a expressão artística madeirense pelo mundo e trazer o mundo à Madeira através da arte e cultura."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
