/**
 * Contact Page - IAMET Cableado Estructurado
 * Swiss Precision Tech Design
 * Página de contacto para cotización de proyectos de cableado estructurado
 * Integración con Bitrix24 (embed y webhook)
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  CONTACT_INFO, 
  SERVICES, 
  REQUEST_TYPES, 
  SEVERITY_LEVELS,
  BITRIX_WEBHOOK_URL,
  BITRIX_WEBFORM_SCRIPT_VENTAS,
  BITRIX_WEBFORM_SCRIPT_SERVICIO
} from "@/lib/config";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  ShoppingBag,
  Headphones,
  Loader2,
  CheckCircle,
  Upload
} from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation, useSearch } from "wouter";

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

// Función para enviar datos a Bitrix24 via webhook
async function sendToBitrix(data: Record<string, any>, method: string = "crm.lead.add") {
  if (BITRIX_WEBHOOK_URL === "PEGAR_AQUI") {
    // Simular envío exitoso si no hay webhook configurado
    console.log("Bitrix webhook no configurado. Datos:", data);
    return { success: true, simulated: true };
  }

  try {
    const response = await fetch(`${BITRIX_WEBHOOK_URL}${method}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fields: data }),
    });
    
    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error("Error enviando a Bitrix:", error);
    return { success: false, error };
  }
}

export default function Contact() {
  const { toast } = useToast();
  const search = useSearch();
  const params = new URLSearchParams(search);
  const tipoInicial = params.get("tipo") || "ventas";
  
  const [activeTab, setActiveTab] = useState(tipoInicial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states - Ventas
  const [ventasForm, setVentasForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: ""
  });

  // Form states - Soporte
  const [soporteForm, setSoporteForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    tipoSolicitud: "",
    severidad: "",
    descripcion: "",
    adjuntos: null as FileList | null
  });

  // Handle Ventas form submit
  const handleVentasSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const bitrixData = {
      TITLE: `Lead Web - ${ventasForm.empresa}`,
      NAME: ventasForm.nombre,
      COMPANY_TITLE: ventasForm.empresa,
      EMAIL: [{ VALUE: ventasForm.email, VALUE_TYPE: "WORK" }],
      PHONE: [{ VALUE: ventasForm.telefono, VALUE_TYPE: "WORK" }],
      SOURCE_ID: "WEB",
      ASSIGNED_BY_ID: 18, // Jafet Rivera como vendedor responsable
      COMMENTS: `Servicio de interés: ${ventasForm.servicio}\n\nMensaje: ${ventasForm.mensaje}`,
    };

    const result = await sendToBitrix(bitrixData, "crm.lead.add");

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      toast({
        title: "Solicitud enviada",
        description: "Nos pondremos en contacto con usted a la brevedad.",
      });
      // Reset form
      setVentasForm({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        servicio: "",
        mensaje: ""
      });
    } else {
      toast({
        title: "Error al enviar",
        description: "Por favor intente nuevamente o contáctenos directamente.",
        variant: "destructive"
      });
    }
  };

  // Handle Soporte form submit
  const handleSoporteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const severidadTexto = SEVERITY_LEVELS.find(s => s.id === soporteForm.severidad)?.name || "";
    const tipoTexto = REQUEST_TYPES.find(t => t.id === soporteForm.tipoSolicitud)?.name || "";

    const bitrixData = {
      TITLE: `Ticket Web - ${soporteForm.empresa} - ${severidadTexto}`,
      NAME: soporteForm.nombre,
      COMPANY_TITLE: soporteForm.empresa,
      EMAIL: [{ VALUE: soporteForm.email, VALUE_TYPE: "WORK" }],
      PHONE: [{ VALUE: soporteForm.telefono, VALUE_TYPE: "WORK" }],
      SOURCE_ID: "WEB",
      ASSIGNED_BY_ID: 18, // Jafet Rivera como vendedor responsable
      COMMENTS: `Tipo de solicitud: ${tipoTexto}\nSeveridad: ${severidadTexto}\n\nDescripción:\n${soporteForm.descripcion}`,
    };

    const result = await sendToBitrix(bitrixData, "crm.lead.add");

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      toast({
        title: "Solicitud registrada",
        description: "Su folio será confirmado por correo electrónico.",
      });
      // Reset form
      setSoporteForm({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        tipoSolicitud: "",
        severidad: "",
        descripcion: "",
        adjuntos: null
      });
    } else {
      toast({
        title: "Error al enviar",
        description: "Por favor intente nuevamente o contáctenos directamente.",
        variant: "destructive"
      });
    }
  };

  // Reset submitted state when changing tabs
  useEffect(() => {
    setSubmitted(false);
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="max-w-3xl"
            >
              <motion.span variants={fadeInUp} className="text-sm font-medium text-primary uppercase tracking-widest">
                Contacto
              </motion.span>
              <motion.h1 variants={fadeInUp} className="mt-4 mb-6">
                Solicite su cotización
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-muted-foreground">
                Cuéntenos sobre su proyecto de cableado estructurado. Nuestro equipo
                le presentará una propuesta con certificación PANDUIT en menos de 24 horas.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Contact Info */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="lg:col-span-1"
              >
                <motion.h3 variants={fadeInUp} className="mb-8">
                  Información de contacto
                </motion.h3>

                <div className="space-y-6">
                  <motion.div variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="font-medium hover:text-primary transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Teléfono</p>
                      <a href={`tel:${CONTACT_INFO.phone}`} className="font-medium hover:text-primary transition-colors">
                        {CONTACT_INFO.phoneDisplay}
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Dirección</p>
                      <p className="font-medium">{CONTACT_INFO.address}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Horario</p>
                      <p className="font-medium">{CONTACT_INFO.schedule}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Mapa Google Maps - Tijuana */}
                <motion.div variants={fadeInUp} className="mt-8">
                  <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.5!2d-117.0194!3d32.5149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9484b1c8b1c1b%3A0x0!2sBoulevard%20Paseo%20del%20R%C3%ADo%2016220%2C%20R%C3%ADo%20Tijuana%203ra%20Etapa%2C%2022226%20Tijuana%2C%20B.C.!5e0!3m2!1ses!2smx!4v1700000000000"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación IAMET - Tijuana"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Formulario de Cotización */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="lg:col-span-2"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-2">Solicitar Cotización</h3>
                  <p className="text-muted-foreground">Complete el formulario y nos pondremos en contacto con usted.</p>
                </div>

                <div>
                    {submitted ? (
                      <div className="text-center py-12">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="mb-4">¡Solicitud enviada!</h3>
                        <p className="text-muted-foreground mb-6">
                          Gracias por contactarnos. Un asesor se comunicará con usted 
                          en las próximas 24 horas hábiles.
                        </p>
                        <Button onClick={() => setSubmitted(false)}>
                          Enviar otra solicitud
                        </Button>
                      </div>
                    ) : (
                      <>
                        {/* Bitrix24 Embed Placeholder */}
                        {BITRIX_WEBFORM_SCRIPT_VENTAS !== "PEGAR_AQUI" ? (
                          <div 
                            dangerouslySetInnerHTML={{ __html: BITRIX_WEBFORM_SCRIPT_VENTAS }}
                            className="bitrix-form-container"
                          />
                        ) : (
                          <form onSubmit={handleVentasSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="v-nombre">Nombre completo *</Label>
                                <Input
                                  id="v-nombre"
                                  required
                                  value={ventasForm.nombre}
                                  onChange={(e) => setVentasForm({...ventasForm, nombre: e.target.value})}
                                  placeholder="Juan Pérez"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="v-empresa">Empresa *</Label>
                                <Input
                                  id="v-empresa"
                                  required
                                  value={ventasForm.empresa}
                                  onChange={(e) => setVentasForm({...ventasForm, empresa: e.target.value})}
                                  placeholder="Nombre de su empresa"
                                />
                              </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                <Label htmlFor="v-email">Email *</Label>
                                <Input
                                  id="v-email"
                                  type="email"
                                  required
                                  value={ventasForm.email}
                                  onChange={(e) => setVentasForm({...ventasForm, email: e.target.value})}
                                  placeholder="correo@empresa.com"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="v-telefono">Teléfono *</Label>
                                <Input
                                  id="v-telefono"
                                  type="tel"
                                  required
                                  value={ventasForm.telefono}
                                  onChange={(e) => setVentasForm({...ventasForm, telefono: e.target.value})}
                                  placeholder="(55) 1234-5678"
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="v-servicio">Servicio de interés *</Label>
                              <Select
                                value={ventasForm.servicio}
                                onValueChange={(value) => setVentasForm({...ventasForm, servicio: value})}
                                required
                              >
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccione un servicio" />
                                </SelectTrigger>
                                <SelectContent>
                                  {SERVICES.map((service) => (
                                    <SelectItem key={service.id} value={service.id}>
                                      {service.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="v-mensaje">Mensaje</Label>
                              <Textarea
                                id="v-mensaje"
                                value={ventasForm.mensaje}
                                onChange={(e) => setVentasForm({...ventasForm, mensaje: e.target.value})}
                                placeholder="Cuéntenos sobre su proyecto o necesidad..."
                                rows={4}
                              />
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Enviando...
                                </>
                              ) : (
                                <>
                                  <Send className="mr-2 h-4 w-4" />
                                  Solicitar cotización
                                </>
                              )}
                            </Button>
                          </form>
                        )}
                      </>
                    )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatBot />
    </div>
  );
}
