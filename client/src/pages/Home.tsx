import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Instagram, Clock, Award, Heart, Stethoscope } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900">
      <Navigation />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 -z-10 rounded-bl-[100px] hidden lg:block" />
        <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/40 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Nutrição Clínica Personalizada
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-foreground leading-[1.1] mb-6">
                Sua saúde começa com <span className="text-primary italic">equilíbrio</span> e ciência.
              </motion.h1>
              
              <motion.p variants={fadeInUp} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg text-balance">
                Nutrição baseada em evidências para transformar sua relação com a comida e alcançar seus objetivos de saúde de forma sustentável.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5534991480036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-1 gap-2 group"
                >
                  Agendar Consulta
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-border bg-white text-foreground font-medium hover:bg-secondary/50 transition-colors"
                >
                  Conhecer Serviços
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>CRN9: 35106</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Atendimento Presencial</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              {/* Image Container with decorative border */}
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl shadow-emerald-900/10 border-8 border-white">
                <div className="aspect-[4/5] bg-neutral-100 relative">
                  {/* UNPLASH: Professional nutritionist woman smiling in office setting, bright, natural light */}
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Júlia Dias Braga - Nutricionista" 
                    className="object-cover w-full h-full"
                  />
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-display font-bold text-lg text-foreground">Excelência Clínica</p>
                        <p className="text-sm text-muted-foreground">Especialista em saúde e bem-estar</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pattern Dots */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:20px_20px] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-6">Sobre Mim</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Meu nome é Júlia Dias Braga. Acredito que a nutrição vai muito além de dietas restritivas. 
              Minha missão é ajudar você a encontrar o equilíbrio entre saúde, bem-estar e prazer em comer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Abordagem Clínica</h3>
              <p className="text-muted-foreground">
                Tratamento focado na prevenção e controle de doenças, com base em exames e histórico clínico detalhado.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Comportamental</h3>
              <p className="text-muted-foreground">
                Entendimento da sua rotina e relação com a comida para criar mudanças de hábitos duradouras.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Personalização</h3>
              <p className="text-muted-foreground">
                Planejamento alimentar individualizado, respeitando suas preferências, cultura e necessidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
               {/* UNSPLASH: Healthy vibrant food bowl salad fresh ingredients flat lay */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" 
                  alt="Healthy Food" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <p className="text-white font-display text-2xl font-medium">Nutrição é vida em equilíbrio</p>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-8">Como posso te ajudar</h2>
              
              <div className="space-y-6">
                {[
                  "Reeducação Alimentar",
                  "Emagrecimento Saudável",
                  "Nutrição para Doenças Crônicas",
                  "Hipertrofia e Performance",
                  "Saúde da Mulher"
                ].map((item, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-4 p-4 rounded-xl bg-secondary/20 hover:bg-secondary/50 transition-colors border border-transparent hover:border-emerald-100"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <a 
                  href="https://wa.me/5534991480036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-white font-medium hover:bg-foreground/90 transition-all gap-2 shadow-lg shadow-foreground/20"
                >
                  Agendar minha avaliação
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION & CONTACT SECTION */}
      <section id="location" className="py-24 bg-foreground text-white relative overflow-hidden">
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-8">Onde me encontrar</h2>
              <p className="text-white/70 text-lg mb-12 max-w-md">
                Atendimento presencial em ambiente acolhedor e preparado para receber você com todo conforto.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hospital Med Center</h3>
                    <p className="text-white/70 leading-relaxed">
                      Consultório 1° andar<br />
                      R. Otávio de Brito, 20 - São Lucas<br />
                      Patrocínio - MG, 38740-000
                    </p>
                    <a 
                      href="https://maps.google.com/?q=Hospital+Med+Center+Patrocínio"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-emerald-400 mt-4 hover:text-emerald-300 text-sm font-medium border-b border-emerald-400/30 pb-0.5 hover:border-emerald-300 transition-colors"
                    >
                      Ver no Google Maps <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Horários</h3>
                    <p className="text-white/70">
                      Segunda a Sexta: 08:00 - 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-display mb-8">Entre em contato</h3>
              
              <div className="space-y-6">
                <a 
                  href="https://wa.me/5534991480036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">WhatsApp / Telefone</p>
                    <p className="text-lg font-medium">+55 34 99148-0036</p>
                  </div>
                </a>

                <a 
                  href="mailto:juliadiasnutricionista@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5 group"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-lg font-medium break-all">juliadiasnutricionista@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-white/50 mb-4">Siga nas redes sociais</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-white/40 py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© 2026 Júlia Dias Braga - Nutricionista Clínica (CRN9 35106). Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
