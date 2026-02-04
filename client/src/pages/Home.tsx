/**
 * Home Page - IAMET Cableado Estructurado
 * Swiss Precision Tech Design
 * Landing page especializada en servicios de cableado estructurado con PANDUIT
 * Secciones: Hero, Quiénes Somos, Visión, Misión, Valores, Por qué IAMET, CTA
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Users, 
  Lightbulb, 
  Target, 
  Heart,
  Award,
  CheckCircle,
  ArrowRight,
  Zap,
  Building2,
  Cpu
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// Valores de la empresa
const valores = [
  { icon: Shield, title: "Calidad Certificada", description: "Instalaciones con certificación PANDUIT y garantía de 25 años" },
  { icon: Award, title: "Excelencia Técnica", description: "Equipo certificado en estándares internacionales de cableado" },
  { icon: Clock, title: "Cumplimiento", description: "Entrega de proyectos en tiempo y forma con documentación completa" },
  { icon: Lightbulb, title: "Tecnología de Punta", description: "Soluciones Cat 6A, Cat 7 y fibra óptica de última generación" },
  { icon: Users, title: "Soporte Integral", description: "Acompañamiento desde el diseño hasta la certificación final" },
  { icon: Target, title: "Precisión", description: "Memorias técnicas detalladas y documentación profesional" },
  { icon: Heart, title: "Confianza", description: "Más de 15 años respaldando la infraestructura de red de empresas" },
  { icon: CheckCircle, title: "Garantía Total", description: "Respaldo completo de fabricante con certificación de por vida" },
];

// Por qué IAMET
const porQueIamet = [
  {
    number: "01",
    title: "Partner Certificado PANDUIT",
    description: "Somos integradores autorizados de PANDUIT, líder mundial en soluciones de infraestructura física de red."
  },
  {
    number: "02",
    title: "Garantía de 25 años",
    description: "Nuestras instalaciones certificadas cuentan con garantía extendida de fábrica de hasta 25 años."
  },
  {
    number: "03",
    title: "Proyectos ejecutivos completos",
    description: "Desarrollamos memorias técnicas, planos As-Built y documentación profesional para cada proyecto."
  },
  {
    number: "04",
    title: "Certificación internacional",
    description: "Técnicos certificados en estándares TIA/EIA-568, ISO/IEC 11801 y BICSI."
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/hero-infrastructure.jpg"
              alt="Data center infrastructure"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                {/* Accent Line */}
                <motion.div variants={fadeInUp} className="accent-line mb-8" />
                
                {/* H1 */}
                <motion.h1 variants={fadeInUp} className="mb-6">
                  Cableado Estructurado Certificado con Garantía de 25 Años
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl text-muted-foreground font-light mb-10 max-w-2xl"
                >
                  Partner certificado PANDUIT. Proyectos ejecutivos, memorias técnicas y certificaciones internacionales.
                </motion.p>
                
                {/* CTAs */}
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contacto?tipo=ventas">
                    <Button size="lg" className="text-base px-8 h-12">
                      Solicitar cotización
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link href="/servicios">
                    <Button variant="outline" size="lg" className="text-base px-8 h-12 bg-transparent">
                      Ver soluciones
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* Quiénes Somos */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                  Quiénes Somos
                </motion.span>
                <motion.h2 variants={fadeInUp} className="mt-4 mb-6">
                  Expertos en infraestructura de red
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-muted-foreground mb-6">
                  IAMET es integrador certificado de PANDUIT con más de 15 años de experiencia
                  en diseño, instalación y certificación de sistemas de cableado estructurado
                  para empresas de todos los sectores.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-muted-foreground mb-8">
                  Desarrollamos proyectos ejecutivos completos que incluyen memorias técnicas,
                  planos As-Built, certificaciones de cada punto de red y garantía extendida
                  de fábrica de hasta 25 años con PANDUIT.
                </motion.p>
                <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Partner PANDUIT</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Garantía 25 años</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Certificación TIA/EIA</span>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="/images/team-collaboration.jpg"
                  alt="Equipo IAMET colaborando"
                  className="rounded-lg shadow-2xl"
                />
                {/* Stats Overlay */}
                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-xl">
                  <div className="text-4xl font-black">15+</div>
                  <div className="text-sm font-medium text-white/80">Años de experiencia</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visión y Misión */}
        <section className="section-padding">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {/* Visión */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative p-8 lg:p-12 bg-card border border-border rounded-lg"
              >
                <div className="absolute -top-4 left-8">
                  <span className="bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                    Visión
                  </span>
                </div>
                <div className="mt-4">
                  <Building2 className="w-10 h-10 text-primary mb-6" />
                  <h3 className="mb-4">Líderes en cableado certificado</h3>
                  <p className="text-muted-foreground">
                    Ser la empresa de referencia en México para soluciones de cableado estructurado,
                    reconocida por la calidad de nuestras instalaciones certificadas y el respaldo
                    de garantías extendidas de fabricantes líderes como PANDUIT.
                  </p>
                </div>
              </motion.div>

              {/* Misión */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative p-8 lg:p-12 bg-card border border-border rounded-lg"
              >
                <div className="absolute -top-4 left-8">
                  <span className="bg-foreground text-background text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider">
                    Misión
                  </span>
                </div>
                <div className="mt-4">
                  <Cpu className="w-10 h-10 text-primary mb-6" />
                  <h3 className="mb-4">Infraestructura de red confiable</h3>
                  <p className="text-muted-foreground">
                    Diseñar e instalar sistemas de cableado estructurado que cumplan con los
                    más altos estándares internacionales, respaldados por certificaciones,
                    memorias técnicas completas y garantías de fabricante de largo plazo.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                Nuestros Valores
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4">
                Los principios que nos guían
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {valores.map((valor, index) => (
                <motion.div
                  key={valor.title}
                  variants={fadeInUp}
                  className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <valor.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{valor.title}</h4>
                  <p className="text-sm text-muted-foreground">{valor.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Por qué IAMET */}
        <section className="section-padding">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                  Por qué elegirnos
                </motion.span>
                <motion.h2 variants={fadeInUp} className="mt-4 mb-12">
                  La diferencia IAMET
                </motion.h2>

                <div className="space-y-8">
                  {porQueIamet.map((item, index) => (
                    <motion.div
                      key={item.number}
                      variants={fadeInUp}
                      className="flex gap-6"
                    >
                      <div className="flex-shrink-0">
                        <span className="text-5xl font-black text-primary/20">{item.number}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src="/images/services-network.jpg"
                  alt="Red de infraestructura"
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section-padding bg-foreground text-background">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={fadeInUp}>
                <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-background mb-6">
                ¿Listo para modernizar su infraestructura de red?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-background/70 text-lg mb-10">
                Solicite una cotización sin compromiso. Nuestros expertos evaluarán su proyecto
                y le presentarán una solución con certificación PANDUIT y garantía de 25 años.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto?tipo=ventas">
                  <Button size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90">
                    Solicitar cotización
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base px-8 h-12 border-background/30 text-background hover:bg-background/10"
                  >
                    Agendar visita técnica
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
