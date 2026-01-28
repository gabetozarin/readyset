import { Calendar, MapPin, Ticket } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const events = [
  {
    id: 1,
    title: "Jam Session Aberta",
    type: "JAZZ",
    date: "24 Fev",
    time: "21:00",
    location: "Sede ReadySet",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2664&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Workshop de Teatro",
    type: "CURSO",
    date: "02 Mar",
    time: "10:00",
    location: "Fórum Machico",
    image: "https://images.unsplash.com/photo-1503095392237-7362137d70df?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Noite de Rock Indie",
    type: "ROCK",
    date: "15 Mar",
    time: "22:30",
    location: "Praça Principal",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=2670&auto=format&fit=crop"
  }
];

export function Events() {
  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-background text-foreground border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl md:text-7xl font-display uppercase">Próximos<br/><span className="text-primary">Eventos</span></h2>
          <button className="hidden md:block border border-white/20 px-6 py-3 uppercase font-mono text-xs hover:bg-primary hover:border-primary transition-colors">
            Ver Agenda Completa
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="group relative bg-card border border-white/10 overflow-hidden hover:border-primary/50 transition-colors">
              <div className="aspect-[4/5] overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white border-none text-xs font-mono uppercase rounded-none">
                  {event.type}
                </Badge>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {event.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {event.location}</span>
                </div>
                
                <h3 className="text-2xl font-display uppercase leading-none group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <button className="w-full mt-4 border border-white/10 py-3 text-xs uppercase font-mono hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
                  <Ticket className="w-3 h-3" /> Reservar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
