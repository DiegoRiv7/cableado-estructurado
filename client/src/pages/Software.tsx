/**
 * Software Page - IAMET Cableado Estructurado
 * NetDoc - Software de Gestión de Infraestructura de Cableado
 * Con video de fondo y diseño moderno para vender el producto
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Network,
  FileText,
  Map,
  Shield,
  BarChart3,
  Search,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  Users,
  Monitor
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

const features = [
  {
    icon: Network,
    title: "Inventario de Puntos de Red",
    description: "Registro completo de cada punto de red: ubicación, categoría, certificación, patch panel, puerto de switch y estado actual."
  },
  {
    icon: FileText,
    title: "Memorias Técnicas Automáticas",
    description: "Genera memorias técnicas profesionales en PDF con un clic. Incluye diagramas, especificaciones y certificaciones."
  },
  {
    icon: Map,
    title: "Planos Interactivos",
    description: "Visualiza tu infraestructura en planos interactivos. Haz clic en cualquier punto para ver su información completa."
  },
  {
    icon: Shield,
    title: "Control de Garantías",
    description: "Seguimiento de garantías PANDUIT y otros fabricantes. Alertas automáticas antes del vencimiento."
  },
  {
    icon: BarChart3,
    title: "Reportes y Análisis",
    description: "Dashboards en tiempo real: puntos activos, certificaciones pendientes, capacidad disponible y más."
  },
  {
    icon: Search,
    title: "Búsqueda Inteligente",
    description: "Encuentra cualquier punto de red en segundos. Busca por ubicación, usuario, MAC address o número de serie."
  }
];

const benefits = [
  { value: "90%", label: "Reducción en tiempo de documentación" },
  { value: "100%", label: "Trazabilidad de infraestructura" },
  { value: "25 años", label: "Historial de cambios guardado" }
];

const useCases = [
  {
    title: "Para instaladores certificados",
    description: "Documenta cada proyecto con calidad profesional. Genera entregables que impresionan a tus clientes.",
    items: ["Certificaciones organizadas", "Reportes para cliente final", "Historial de proyectos"]
  },
  {
    title: "Para empresas",
    description: "Mantén el control total de tu infraestructura de red. Sabe exactamente qué tienes y dónde está.",
    items: ["Inventario actualizado", "Planeación de expansiones", "Gestión de garantías"]
  },
  {
    title: "Para data centers",
    description: "Documenta cada rack, cada patch panel, cada conexión. Cumple con auditorías sin estrés.",
    items: ["Cumplimiento normativo", "Gestión de cambios", "Capacidad en tiempo real"]
  }
];

export default function Software() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero Section con Video de Fondo */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Video de fondo */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80"
            >
              <source
                src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-in-an-office-4451/1080p.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Software exclusivo IAMET</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="mb-6">
                  <span className="text-primary">NetDoc</span>
                  <br />
                  Gestión de Infraestructura de Cableado
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="text-xl text-muted-foreground mb-8 max-w-xl"
                >
                  El software que documenta, organiza y gestiona toda tu infraestructura de cableado estructurado.
                  Memorias técnicas en un clic. Control total de tu red.
                </motion.p>

                <motion.div variants={fadeInUp}>
                  <Link href="/contacto?tipo=ventas&servicio=netdoc">
                    <Button size="lg" className="text-base px-8 h-12">
                      Solicitar demo gratuita
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>

                {/* Métricas rápidas */}
                <motion.div variants={fadeInUp} className="flex gap-8 mt-12 pt-8 border-t border-border/50">
                  {benefits.map((benefit, i) => (
                    <div key={i}>
                      <div className="text-2xl font-black text-primary">{benefit.value}</div>
                      <div className="text-sm text-muted-foreground">{benefit.label}</div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Mockup del software */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-2xl" />
                  <div className="relative bg-card border border-border rounded-xl shadow-2xl overflow-hidden">
                    {/* Barra de título del software */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground ml-2">NetDoc - Dashboard</span>
                    </div>
                    {/* Screenshot del dashboard */}
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                      alt="NetDoc Dashboard"
                      className="w-full aspect-[16/10] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Características */}
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
                Características
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4 mb-6">
                Todo lo que necesitas para gestionar tu infraestructura
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
                NetDoc centraliza toda la información de tu cableado estructurado en una sola plataforma.
                Desde el diseño hasta el mantenimiento.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Demo visual / Screenshot grande */}
        <section className="section-padding">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={fadeInUp}>
                <span className="text-sm font-medium text-primary uppercase tracking-widest">
                  Interfaz intuitiva
                </span>
                <h2 className="mt-4 mb-6">
                  Diseñado para técnicos, aprobado por gerentes
                </h2>
                <p className="text-muted-foreground mb-8">
                  Una interfaz limpia que cualquier técnico puede usar desde el primer día.
                  Reportes ejecutivos que los gerentes entienden y valoran.
                </p>

                <div className="space-y-4">
                  {[
                    "Registra puntos de red en segundos desde móvil o desktop",
                    "Genera memorias técnicas profesionales con un clic",
                    "Exporta a PDF, Excel o integra con tu ERP",
                    "Funciona offline - sincroniza cuando hay conexión"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/contacto?tipo=ventas&servicio=netdoc">
                    <Button>
                      Agenda una demo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="relative"
              >
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                    alt="NetDoc - Interfaz de usuario"
                    className="w-full"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />

                  {/* Floating stats cards */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                    <div className="flex-1 bg-card/95 backdrop-blur-sm p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Network className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">2,847</div>
                          <div className="text-xs text-muted-foreground">Puntos documentados</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-card/95 backdrop-blur-sm p-4 rounded-lg border border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-green-500" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold">100%</div>
                          <div className="text-xs text-muted-foreground">Certificados</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Casos de uso */}
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
                Casos de uso
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4">
                NetDoc se adapta a tu operación
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              {useCases.map((useCase, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="p-8 bg-card border border-border rounded-xl"
                >
                  <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
                  <p className="text-muted-foreground mb-6">{useCase.description}</p>
                  <ul className="space-y-2">
                    {useCase.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Ventajas */}
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
                Ventajas
              </motion.span>
              <motion.h2 variants={fadeInUp} className="mt-4">
                ¿Por qué elegir NetDoc?
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { icon: Zap, title: "Implementación rápida", description: "Listo para usar en un día, no en semanas" },
                { icon: Clock, title: "Soporte en español", description: "Equipo de soporte en México disponible" },
                { icon: Monitor, title: "Web y móvil", description: "Accede desde cualquier dispositivo" },
                { icon: Users, title: "Usuarios ilimitados", description: "Sin cargos extra por usuario adicional" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
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
                <Network className="w-12 h-12 text-primary mx-auto mb-6" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-background mb-6">
                Documenta tu infraestructura como profesional
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-background/70 text-lg mb-10">
                Únete a los integradores que ya gestionan su cableado con NetDoc.
                Demo gratuita y sin compromiso.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto?tipo=ventas&servicio=netdoc">
                  <Button size="lg" className="text-base px-8 h-12 bg-primary hover:bg-primary/90">
                    Solicitar demo gratuita
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-base px-8 h-12 border-background/30 text-background hover:bg-background/10"
                  >
                    Contactar ventas
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
