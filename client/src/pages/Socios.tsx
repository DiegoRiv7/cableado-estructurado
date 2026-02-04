/**
 * Socios Comerciales - IAMET Cableado Estructurado
 * Distribuidores autorizados con los que trabajamos
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Truck,
  Package,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  Handshake,
  ShieldCheck,
  Warehouse,
  BadgeCheck
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

const distribuidores = [
  {
    nombre: "SYSCOM",
    tipo: "Distribuidor Autorizado",
    descripcion: "Distribuidor líder en México de productos de telecomunicaciones, seguridad y redes. Nos proveen materiales PANDUIT, fibra óptica y accesorios de instalación con disponibilidad inmediata.",
    beneficios: [
      "Amplio inventario disponible",
      "Envíos a todo México",
      "Productos 100% originales",
      "Soporte técnico especializado"
    ],
    ubicacion: "Cobertura nacional",
    imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
  },
  {
    nombre: "Grupo DICE",
    tipo: "Distribuidor Autorizado",
    descripcion: "Especialistas en soluciones de infraestructura de TI y cableado estructurado. Partner estratégico para proyectos de gran escala con productos certificados.",
    beneficios: [
      "Especialistas en cableado estructurado",
      "Asesoría técnica incluida",
      "Precios competitivos",
      "Logística eficiente"
    ],
    ubicacion: "Cobertura nacional",
    imagen: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
  }
];

const beneficiosDistribuidores = [
  {
    icon: ShieldCheck,
    titulo: "Productos Originales",
    descripcion: "Todos los materiales son 100% originales con garantía de fabricante"
  },
  {
    icon: Truck,
    titulo: "Entrega Rápida",
    descripcion: "Logística eficiente para cumplir con los tiempos de tu proyecto"
  },
  {
    icon: Warehouse,
    titulo: "Amplio Inventario",
    descripcion: "Disponibilidad inmediata de los productos más utilizados"
  },
  {
    icon: BadgeCheck,
    titulo: "Certificación Válida",
    descripcion: "Materiales que cumplen para obtener la garantía de 25 años PANDUIT"
  }
];

const marcasDisponibles = [
  "PANDUIT",
  "Fluke Networks",
  "Commscope",
  "Leviton",
  "Hubbell",
  "Siemon",
  "Belden",
  "Corning"
];

export default function Socios() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80"
              alt="Socios comerciales"
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
                Socios Comerciales
              </motion.span>
              <motion.h1 variants={fadeInUp} className="mt-4 mb-6">
                Distribuidores autorizados
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Trabajamos con los principales distribuidores de México para garantizar
                materiales originales, disponibilidad inmediata y los mejores precios.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-12 bg-primary">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {beneficiosDistribuidores.map((beneficio, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <beneficio.icon className="w-8 h-8 text-white mx-auto mb-3" />
                  <div className="text-white font-semibold">{beneficio.titulo}</div>
                  <div className="text-white/70 text-sm mt-1">{beneficio.descripcion}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Distribuidores */}
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
                Nuestros Distribuidores
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4">
                Partners que respaldan nuestros proyectos
              </motion.h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {distribuidores.map((distribuidor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  {/* Imagen */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={distribuidor.imagen}
                      alt={distribuidor.nombre}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
                        <Handshake className="w-3 h-3" />
                        {distribuidor.tipo}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{distribuidor.nombre}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-4">
                      <MapPin className="w-4 h-4" />
                      {distribuidor.ubicacion}
                    </div>
                    <p className="text-muted-foreground mb-6">{distribuidor.descripcion}</p>

                    {/* Beneficios */}
                    <div className="space-y-2">
                      {distribuidor.beneficios.map((beneficio, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{beneficio}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Por qué trabajamos con distribuidores */}
        <section className="section-padding">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <span className="text-sm font-medium text-primary uppercase tracking-widest">
                    Nuestra Filosofía
                  </span>
                  <h2 className="mt-4 mb-6">
                    ¿Por qué trabajamos con distribuidores autorizados?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    La calidad de una instalación de cableado estructurado depende tanto de la
                    mano de obra como de los materiales. Por eso solo trabajamos con distribuidores
                    autorizados que garantizan productos 100% originales.
                  </p>

                  <div className="space-y-4">
                    {[
                      "Garantía de productos originales con certificado",
                      "Trazabilidad completa de materiales",
                      "Cumplimiento de requisitos para garantía PANDUIT",
                      "Soporte post-venta y reemplazos garantizados"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                    alt="Trabajo en equipo"
                    className="rounded-xl shadow-xl"
                  />
                </motion.div>
              </div>
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
                <Handshake className="w-12 h-12 text-primary mx-auto mb-6" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-background mb-6">
                Materiales de calidad, resultados garantizados
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-background/70 text-lg mb-10">
                Solicita tu cotización y obtén materiales originales con la mejor relación
                calidad-precio del mercado.
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
