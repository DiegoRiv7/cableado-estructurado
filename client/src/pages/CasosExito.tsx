/**
 * Casos de Éxito - IAMET Cableado Estructurado
 * Proyectos destacados y testimonios de clientes
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Hospital,
  GraduationCap,
  ShoppingBag,
  Warehouse,
  CheckCircle,
  ArrowRight,
  Quote,
  MapPin,
  Network
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
    icon: Building2,
    sector: "Corporativo",
    cliente: "Torre Corporativa Zona Río",
    ubicacion: "Tijuana, B.C.",
    descripcion: "Instalación completa de cableado estructurado Cat 6A para edificio corporativo de 12 pisos con más de 500 puntos de red.",
    puntos: "500+",
    categoria: "Cat 6A",
    garantia: "25 años",
    logros: [
      "Certificación PANDUIT completa",
      "Entrega en tiempo récord",
      "Cero fallas post-instalación"
    ],
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    id: 2,
    icon: Factory,
    sector: "Industrial",
    cliente: "Planta Manufacturera Internacional",
    ubicacion: "Mexicali, B.C.",
    descripcion: "Proyecto de fibra óptica y cableado industrial para planta de manufactura con ambientes hostiles y requerimientos especiales.",
    puntos: "350+",
    categoria: "Cat 6 Industrial + FO",
    garantia: "25 años",
    logros: [
      "Cableado resistente a interferencias",
      "Backbone de fibra óptica",
      "Documentación técnica completa"
    ],
    imagen: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80"
  },
  {
    id: 3,
    icon: Hospital,
    sector: "Salud",
    cliente: "Hospital Regional",
    ubicacion: "Tijuana, B.C.",
    descripcion: "Infraestructura de red crítica para hospital con redundancia y alta disponibilidad para sistemas médicos.",
    puntos: "800+",
    categoria: "Cat 6A + FO",
    garantia: "25 años",
    logros: [
      "Red redundante 99.99% uptime",
      "Cumplimiento normativo de salud",
      "Soporte prioritario 24/7"
    ],
    imagen: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
  },
  {
    id: 4,
    icon: GraduationCap,
    sector: "Educación",
    cliente: "Universidad Privada",
    ubicacion: "Ensenada, B.C.",
    descripcion: "Modernización de infraestructura de red para campus universitario con múltiples edificios y laboratorios.",
    puntos: "1,200+",
    categoria: "Cat 6A + FO",
    garantia: "25 años",
    logros: [
      "Interconexión de 8 edificios",
      "WiFi de alta densidad",
      "Laboratorios especializados"
    ],
    imagen: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
  },
  {
    id: 5,
    icon: ShoppingBag,
    sector: "Retail",
    cliente: "Centro Comercial Premium",
    ubicacion: "Tijuana, B.C.",
    descripcion: "Cableado estructurado para centro comercial con más de 100 locales y áreas comunes.",
    puntos: "600+",
    categoria: "Cat 6",
    garantia: "25 años",
    logros: [
      "Infraestructura para 100+ locales",
      "Sistema de seguridad integrado",
      "Escalabilidad futura garantizada"
    ],
    imagen: "https://images.unsplash.com/photo-1567449303078-57ad995bd329?w=800&q=80"
  },
  {
    id: 6,
    icon: Warehouse,
    sector: "Logística",
    cliente: "Centro de Distribución",
    ubicacion: "Tecate, B.C.",
    descripcion: "Infraestructura de red para centro de distribución con sistemas de inventario y automatización.",
    puntos: "250+",
    categoria: "Cat 6 Industrial",
    garantia: "25 años",
    logros: [
      "Integración con sistemas WMS",
      "Cobertura WiFi industrial",
      "Resistente a polvo y humedad"
    ],
    imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
  }
];

const testimonios = [
  {
    nombre: "Ing. Roberto Méndez",
    cargo: "Director de TI",
    empresa: "Corporativo Zona Río",
    testimonio: "IAMET demostró profesionalismo desde el diseño hasta la certificación. La documentación y memorias técnicas que entregaron superaron nuestras expectativas.",
    imagen: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
  },
  {
    nombre: "Lic. María González",
    cargo: "Gerente de Operaciones",
    empresa: "Planta Industrial Mexicali",
    testimonio: "La garantía de 25 años con PANDUIT nos dio la confianza para elegir a IAMET. Llevamos 3 años sin ningún problema en la red.",
    imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80"
  },
  {
    nombre: "Dr. Carlos Ramírez",
    cargo: "Director General",
    empresa: "Hospital Regional",
    testimonio: "En el sector salud no podemos permitir fallas. IAMET entendió nuestras necesidades y entregó una red con redundancia que funciona perfectamente.",
    imagen: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80"
  }
];

const estadisticas = [
  { valor: "50+", label: "Proyectos completados" },
  { valor: "10,000+", label: "Puntos de red instalados" },
  { valor: "100%", label: "Clientes satisfechos" },
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
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
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
                Más de 50 proyectos exitosos en Baja California con certificación PANDUIT
                y garantía de 25 años.
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="relative h-48 overflow-hidden">
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
                        <div className="text-xs text-muted-foreground">Puntos</div>
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

        {/* Testimonios */}
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
                Testimonios
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4">
                Lo que dicen nuestros clientes
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <Quote className="w-10 h-10 text-primary/20 mb-4" />
                  <p className="text-muted-foreground mb-6 italic">"{testimonio.testimonio}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonio.imagen}
                      alt={testimonio.nombre}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonio.nombre}</div>
                      <div className="text-sm text-muted-foreground">{testimonio.cargo}</div>
                      <div className="text-sm text-primary">{testimonio.empresa}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
