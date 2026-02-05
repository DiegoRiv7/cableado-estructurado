/**
 * Services Page - IAMET Cableado Estructurado
 * Swiss Precision Tech Design
 * Página de servicios de cableado estructurado con PANDUIT
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Network, 
  Shield, 
  Volume2, 
  MonitorPlay, 
  Code2, 
  Laptop, 
  Radio,
  ArrowRight,
  CheckCircle
} from "lucide-react";

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

const services = [
  {
    id: "cableado-certificado",
    icon: Network,
    title: "Cableado Estructurado Certificado",
    subtitle: "Cobre Cat 6/6A/7",
    benefit: "Infraestructura de red certificada con materiales PANDUIT y garantía extendida de fábrica de 25 años",
    features: [
      "Instalación de cableado Cat 6, Cat 6A y Cat 7",
      "Certificación de cada punto con equipo Fluke",
      "Garantía PANDUIT de 25 años en materiales y mano de obra"
    ],
    image: "/images/services-network.jpg"
  },
  {
    id: "fibra-optica",
    icon: Radio,
    title: "Fibra Óptica",
    subtitle: "Backbone de Alta Velocidad",
    benefit: "Enlaces de fibra óptica monomodo y multimodo para backbone y conexiones de largo alcance",
    features: [
      "Fibra monomodo y multimodo",
      "Fusiones certificadas con OTDR",
      "Enlaces de campus y data center"
    ],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    id: "proyectos-ejecutivos",
    icon: Code2,
    title: "Proyectos Ejecutivos",
    subtitle: "Diseño y Documentación",
    benefit: "Diseño profesional de su infraestructura de red con documentación completa y detallada",
    features: [
      "Levantamiento y análisis de requerimientos",
      "Diseño de topología y rutas de cableado",
      "Planos arquitectónicos y diagramas de red"
    ],
    image: "/images/software-dashboard.jpg"
  },
  {
    id: "memorias-tecnicas",
    icon: Laptop,
    title: "Memorias Técnicas",
    subtitle: "Documentación Profesional",
    benefit: "Entrega de documentación técnica completa para respaldo y mantenimiento futuro de su red",
    features: [
      "Memorias descriptivas del proyecto",
      "Planos As-Built actualizados",
      "Reportes de certificación punto por punto"
    ],
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80"
  },
  {
    id: "certificaciones",
    icon: Shield,
    title: "Certificaciones PANDUIT",
    subtitle: "Garantía de 25 Años",
    benefit: "Certificación oficial de fabricante que garantiza el rendimiento de su infraestructura por 25 años",
    features: [
      "Registro ante PANDUIT como instalación certificada",
      "Garantía extendida de fábrica de 25 años",
      "Certificación de cumplimiento TIA/EIA-568"
    ],
    image: "panduit-logo",
    isLogo: true
  },
  {
    id: "mantenimiento",
    icon: MonitorPlay,
    title: "Mantenimiento de Red",
    subtitle: "Soporte Preventivo y Correctivo",
    benefit: "Servicio de mantenimiento para asegurar el óptimo funcionamiento de su infraestructura de cableado",
    features: [
      "Diagnóstico y certificación de puntos existentes",
      "Reubicación y extensión de puntos de red",
      "Actualización de documentación técnica"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
  },
  {
    id: "consultoria",
    icon: Volume2,
    title: "Consultoría de Infraestructura",
    subtitle: "Asesoría Especializada",
    benefit: "Evaluación técnica de su infraestructura actual y recomendaciones de mejora",
    features: [
      "Auditoría de cableado existente",
      "Recomendaciones de actualización tecnológica",
      "Planeación de capacidad futura"
    ],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section con imagen de fondo */}
        <section className="relative min-h-[60vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80"
              alt="Cableado estructurado profesional"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          </div>

          <div className="container relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                Nuestros Servicios
              </motion.span>
              <motion.h1 variants={fadeInUp} className="mt-4 mb-6">
                Soluciones de cableado estructurado certificado
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Infraestructura de red profesional con materiales PANDUIT, certificación
                internacional y garantía extendida de fábrica de hasta 25 años.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={staggerContainer}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">{service.subtitle}</span>
                        <h2 className="text-3xl md:text-4xl">{service.title}</h2>
                      </div>
                    </motion.div>

                    <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                      {service.benefit}
                    </motion.p>

                    <motion.div variants={fadeInUp} className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </div>
                      ))}
                    </motion.div>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                      <Link href="/contacto?tipo=ventas">
                        <Button>
                          Solicitar cotización
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href="/contacto">
                        <Button variant="outline">
                          Agendar visita técnica
                        </Button>
                      </Link>
                    </motion.div>
                  </div>

                  {/* Image */}
                  <motion.div
                    variants={fadeInUp}
                    className={index % 2 === 1 ? "lg:order-1" : ""}
                  >
                    <div className="relative">
                      {service.isLogo ? (
                        <div className="rounded-lg shadow-xl w-full aspect-[4/3] bg-white flex flex-col items-center justify-center p-12 border border-border">
                          {/* PANDUIT Logo Estilizado */}
                          <div className="text-center">
                            <div className="text-5xl md:text-6xl font-black text-[#003366] tracking-wider mb-4">
                              PANDUIT
                            </div>
                            <div className="text-[#003366]/70 text-lg font-medium tracking-widest">
                              CERTIFIED INSTALLER
                            </div>
                            <div className="mt-6 flex items-center justify-center gap-2">
                              <Shield className="w-8 h-8 text-primary" />
                              <span className="text-primary font-bold text-xl">25 AÑOS</span>
                              <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <div className="text-muted-foreground text-sm mt-2">
                              Garantía Extendida de Fábrica
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="rounded-lg shadow-xl w-full aspect-[4/3] object-cover"
                          loading="lazy"
                        />
                      )}
                      {/* Number decoration */}
                      <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-black text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-white mb-6">
                ¿Tiene un proyecto especial?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-10">
                Desarrollamos soluciones de cableado a la medida para data centers,
                plantas industriales, edificios corporativos y más.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/contacto">
                  <Button size="lg" variant="secondary" className="text-base px-8 h-12">
                    Contáctenos
                    <ArrowRight className="ml-2 w-4 h-4" />
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
