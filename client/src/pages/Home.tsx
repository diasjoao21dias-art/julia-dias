import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { ArrowRight, CheckCircle2, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Clock, Award, Heart, Stethoscope, Calendar } from "lucide-react";

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
      <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-secondary/40 to-transparent -z-10 rounded-bl-[120px] hidden lg:block" />
        
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-2xl z-10"
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-primary/10 text-primary text-xs sm:text-sm font-semibold mb-6 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                </span>
                Nutrição Clínica de Alta Performance
              </motion.div>
              
              <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-medium text-foreground leading-[1.05] mb-6">
                Sua saúde em <span className="text-primary italic relative">harmonia<svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" /></svg></span> e ciência.
              </motion.h1>

              {/* Mobile Profile Image - Integrated into Hero for mobile */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="lg:hidden mb-8 relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                    alt="Júlia Dias Braga" 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white drop-shadow-md">
                    <p className="font-display text-2xl font-bold mb-1">Júlia Dias Braga</p>
                    <p className="text-sm opacity-90 font-medium tracking-wide">Nutricionista Clínica CRN9 35106</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.p variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-xl text-balance font-light">
                Abordagem personalizada e baseada em evidências para otimizar sua vitalidade e longevidade.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://calendar.app.google/dqk9CGTm7ZSKpMg56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-1.5 gap-3 group active:scale-95 text-sm sm:text-base"
                >
                  Iniciar Transformação
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <a 
                  href="https://wa.me/5534991480036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary/20 bg-white/40 backdrop-blur-sm text-foreground font-semibold hover:bg-white/60 transition-all hover:border-primary/40 active:scale-95 text-sm sm:text-base"
                >
                  Falar no WhatsApp
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap items-center gap-6 text-[10px] sm:text-xs text-muted-foreground font-medium uppercase tracking-wider">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-white/50">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>CRN9 35106</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-white/50">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
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
      <section id="about" className="py-24 bg-white/40 backdrop-blur-sm relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block"
            >
              Conheça a Profissional
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-4">Júlia Dias Braga</h2>
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-8 block">Nutricionista Clínica</p>
            <div className="w-24 h-1.5 bg-primary/20 mx-auto mb-10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 1 }}
                className="w-full h-full bg-primary" 
              />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              Nutricionista Clínica apaixonada por transformar vidas através de uma alimentação consciente e equilibrada. 
              Com foco em ciência e empatia, busco descomplicar a nutrição para que você alcance sua melhor versão.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Stethoscope, title: "Foco Clínico", desc: "Análise profunda do seu histórico metabólico." },
              { icon: Heart, title: "Humanização", desc: "Atendimento acolhedor e sem julgamentos." },
              { icon: Award, title: "Especialista", desc: "Conhecimento atualizado e baseado em evidências." },
              { icon: Clock, title: "Acompanhamento", desc: "Suporte contínuo na sua jornada de saúde." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-primary/5 hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5 group"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METODOLOGIA SECTION */}
      <section id="methodology" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative rounded-[3rem] overflow-hidden aspect-square border-8 border-white shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop" 
                alt="Consultation" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>

            <div>
              <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Meu Método</span>
              <h2 className="text-4xl md:text-5xl font-display text-foreground mb-10 italic">Como funciona nossa jornada</h2>
              
              <div className="space-y-10">
                {[
                  { step: "01", title: "Avaliação 360°", desc: "Análise de exames, rotina, sono e relação emocional com a comida." },
                  { step: "02", title: "Plano sob Medida", desc: "Criação de um planejamento real, prático e que respeita seus gostos." },
                  { step: "03", title: "Suporte Ativo", desc: "Ajustes constantes e suporte para superar desafios do dia a dia." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <span className="text-4xl font-display text-primary/30 font-bold">{item.step}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display text-center mb-16">Dúvidas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "Preciso de exames para a primeira consulta?", a: "Se você tiver exames recentes (últimos 6 meses), pode trazê-los. Caso contrário, solicitaremos conforme a necessidade." },
                { q: "O plano alimentar é entregue na hora?", a: "Para garantir a máxima personalização, o plano é enviado em até 48h após a consulta detalhada." },
                { q: "Atende convênios?", a: "Atendemos de forma particular, mas fornecemos recibo para que você possa solicitar o reembolso junto ao seu convênio." }
              ].map((item, i) => (
                <details key={i} className="group bg-white rounded-2xl border border-primary/5 overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-lg hover:bg-primary/5 transition-colors">
                    {item.q}
                    <span className="text-primary group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-primary/5">
                    {item.a}
                  </div>
                </details>
              ))}
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-foreground mb-8">Atendimento Nutricional</h2>
              
              <div className="space-y-6">
                {[
                  "Avaliação Antropométrica",
                  "Plano Alimentar Personalizado",
                  "Reeducação Alimentar",
                  "Criação de Rotina Saudável",
                  "Emagrecimento Saudável",
                  "Hipertrofia e Performance"
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

      {/* CTA SECTION */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-display font-medium mb-6">
              Pronto para dar o primeiro passo rumo à sua melhor versão?
            </h2>
            <p className="text-xl opacity-90 mb-10 font-light">
              Escolha o melhor horário para você e agende sua consulta de forma rápida e prática.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendar.app.google/dqk9CGTm7ZSKpMg56"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-white text-primary font-bold hover:bg-neutral-100 transition-all hover:shadow-2xl hover:-translate-y-1.5 gap-3 active:scale-95"
              >
                Agende sua consulta agora mesmo!
                <Calendar className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5534991480036"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all active:scale-95"
              >
                Dúvidas pelo WhatsApp
              </a>
            </div>
          </motion.div>
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
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING ACTION BUTTON */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-4"
      >
        <a 
          href="https://wa.me/5534991480036"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-2xl active:scale-90 transition-transform"
          title="WhatsApp"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a 
          href="https://calendar.app.google/dqk9CGTm7ZSKpMg56"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-primary text-white rounded-full shadow-2xl active:scale-90 transition-transform"
          title="Agendar Consulta"
        >
          <Clock className="w-6 h-6" />
        </a>
      </motion.div>
    </div>
  );
}
