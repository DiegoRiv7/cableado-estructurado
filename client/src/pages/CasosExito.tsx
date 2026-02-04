/**
 * Casos de Éxito - IAMET Cableado Estructurado
 * Proyectos destacados reales
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Building2,
  Hospital,
  Landmark,
  CheckCircle,
  ArrowRight,
  MapPin,
  Network,
  Wifi,
  Cable
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

const casosExito = [
  {
    id: 1,
    icon: Hospital,
    sector: "Salud",
    cliente: "Sistemas Médicos Alaris",
    ubicacion: "El Realito, Tijuana",
    descripcion: "Instalación de infraestructura de red para cobertura WiFi empresarial en instalaciones de BD (Becton Dickinson), líder mundial en tecnología médica.",
    puntos: "279",
    categoria: "Cat. 6A",
    garantia: "25 años",
    logros: [
      "Certificación PANDUIT completa",
      "Infraestructura para WiFi de alta densidad",
      "Cobertura total de instalaciones"
    ],
    imagen: "/images/casos/alaris.jpg"
  },
  {
    id: 2,
    icon: Landmark,
    sector: "Gobierno",
    cliente: "Fiscalía General del Estado de Baja California",
    ubicacion: "Edificio de Visitaduría",
    descripcion: "Proyecto de cableado estructurado para edificio gubernamental con requerimientos de seguridad y confiabilidad para operaciones críticas.",
    puntos: "117",
    categoria: "Cat. 6",
    garantia: "25 años",
    logros: [
      "Cumplimiento de normativas gubernamentales",
      "Red de alta disponibilidad",
      "Documentación técnica completa"
    ],
    imagen: "/images/casos/fiscalia.jpg"
  },
  {
    id: 3,
    icon: Building2,
    sector: "Residencial",
    cliente: "Edificio Vertical The Wesley",
    ubicacion: "Playas de Tijuana",
    descripcion: "Infraestructura de red para complejo residencial de lujo con múltiples torres y departamentos, garantizando conectividad en cada unidad.",
    puntos: "182",
    categoria: "Cat. 6",
    garantia: "25 años",
    logros: [
      "Cobertura en todos los departamentos",
      "Infraestructura preparada para el futuro",
      "Instalación durante construcción"
    ],
    imagen: "/images/casos/wesley.jpg"
  }
];

const estadisticas = [
  { valor: "578+", label: "Nodos instalados" },
  { valor: "3", label: "Sectores diferentes" },
  { valor: "100%", label: "Certificados PANDUIT" },
  { valor: "25", label: "Años de garantía" }
];

export default function CasosExito() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/casos/alaris.jpg"
              alt="Casos de éxito"
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
                Casos de Éxito
              </motion.span>
              <motion.h1 variants={fadeInUp} className="mt-4 mb-6">
                Proyectos que respaldan nuestra experiencia
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Instalaciones certificadas PANDUIT en los sectores de salud, gobierno y residencial
                con garantía de 25 años.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-12 bg-primary">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {estadisticas.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-white">{stat.valor}</div>
                  <div className="text-white/80 text-sm mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Casos de Éxito Grid */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-16"
            >
              <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                Proyectos Destacados
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4">
                Infraestructura que marca la diferencia
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {casosExito.map((caso, index) => (
                <motion.div
                  key={caso.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Imagen */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={caso.imagen}
                      alt={caso.cliente}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                        <caso.icon className="w-3 h-3" />
                        {caso.sector}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{caso.cliente}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {caso.ubicacion}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{caso.descripcion}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-secondary/50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{caso.puntos}</div>
                        <div className="text-xs text-muted-foreground">Nodos</div>
                      </div>
                      <div className="text-center border-x border-border">
                        <div className="text-lg font-bold text-primary">{caso.categoria}</div>
                        <div className="text-xs text-muted-foreground">Categoría</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{caso.garantia}</div>
                        <div className="text-xs text-muted-foreground">Garantía</div>
                      </div>
                    </div>

                    {/* Logros */}
                    <div className="space-y-2">
                      {caso.logros.map((logro, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{logro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sectores */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="text-center mb-12"
            >
              <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                Experiencia Multisectorial
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4">
                Soluciones para cada industria
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Hospital className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sector Salud</h3>
                <p className="text-muted-foreground text-sm">
                  Infraestructura crítica para hospitales y clínicas con alta disponibilidad y redundancia.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Landmark className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sector Gobierno</h3>
                <p className="text-muted-foreground text-sm">
                  Proyectos que cumplen con normativas y estándares de seguridad gubernamentales.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sector Residencial</h3>
                <p className="text-muted-foreground text-sm">
                  Edificios y desarrollos habitacionales con conectividad de primer nivel.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
                <Network className="w-12 h-12 text-primary mx-auto mb-6" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-background mb-6">
                ¿Listo para ser nuestro próximo caso de éxito?
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-background/70 text-lg mb-10">
                Únete a las empresas que confían en IAMET para su infraestructura de red.
                Cotización sin compromiso.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link href="/contacto">
                  <Button size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90">
                    Solicitar cotización
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
