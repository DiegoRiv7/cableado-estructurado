/**
 * IAMET Cableado Estructurado - Website Configuration
 * ====================================================
 * Este archivo contiene todos los placeholders editables para la integración con Bitrix24
 * y la información de contacto de la empresa.
 *
 * Landing page especializada en servicios de cableado estructurado con PANDUIT
 *
 * INSTRUCCIONES:
 * 1. Reemplace los valores "PEGAR_AQUI" con los scripts/URLs correspondientes de Bitrix24
 * 2. Actualice la información de contacto según sea necesario
 */

// ============================================
// INTEGRACIÓN BITRIX24 - FORMULARIOS WEB
// ============================================

/**
 * Script del formulario de Ventas/Diagnóstico de Bitrix24
 * Para obtener este script:
 * 1. En Bitrix24, vaya a CRM > Formularios web
 * 2. Cree o edite el formulario de captación de leads
 * 3. Copie el código de inserción (script/iframe)
 */
export const BITRIX_WEBFORM_SCRIPT_VENTAS = "PEGAR_AQUI";

/**
 * Script del formulario de Servicio/Soporte de Bitrix24
 * Para obtener este script:
 * 1. En Bitrix24, vaya a CRM > Formularios web
 * 2. Cree o edite el formulario de solicitudes de servicio
 * 3. Copie el código de inserción (script/iframe)
 */
export const BITRIX_WEBFORM_SCRIPT_SERVICIO = "PEGAR_AQUI";

// ============================================
// INTEGRACIÓN BITRIX24 - REST WEBHOOK
// ============================================

/**
 * URL del Webhook REST de Bitrix24
 * Para obtener esta URL:
 * 1. En Bitrix24, vaya a Aplicaciones > Webhooks
 * 2. Cree un webhook entrante con permisos de CRM
 * 3. Copie la URL generada (formato: https://sudominio.bitrix24.com/rest/1/xxxxx/)
 */
export const BITRIX_WEBHOOK_URL = "https://bajanet.bitrix24.mx/rest/86/38puplvj0z7arvll/";

/**
 * Métodos disponibles para el webhook:
 * - crm.lead.add: Crear nuevo lead (para formulario de ventas)
 * - crm.deal.add: Crear nuevo negocio
 * - crm.contact.add: Crear nuevo contacto
 */
export const BITRIX_METHODS = {
  createLead: "crm.lead.add",
  createDeal: "crm.deal.add",
  createContact: "crm.contact.add",
};

// ============================================
// INTEGRACIÓN BITRIX24 - LIVE CHAT
// ============================================

/**
 * Script del Widget de Live Chat de Bitrix24
 * Para obtener este script:
 * 1. En Bitrix24, vaya a Contact Center > Widget del sitio web
 * 2. Configure el widget de chat en vivo
 * 3. Copie el código de inserción
 */
export const BITRIX_LIVECHAT_WIDGET_SCRIPT = "PEGAR_AQUI";

// ============================================
// INFORMACIÓN DE CONTACTO
// ============================================

export const CONTACT_INFO = {
  email: "contacto@iamet.mx",
  phone: "+52 664 380 8965",
  phoneDisplay: "664 380 8965",
  address: "Boulevard Paseo del Río No. 16220, Local 7C y 6C, Col. Río Tijuana 3ra Etapa, C.P. 22226, Tijuana, Baja California, México",
  addressShort: "Río Tijuana, Tijuana, B.C.",
  schedule: "Lunes a Viernes: 9:00 - 18:00",
  emergencyPhone: "+52 664 380 8965",
};

// ============================================
// REDES SOCIALES
// ============================================

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/iamet",
  facebook: "https://facebook.com/iametmx",
  twitter: "https://twitter.com/iametmx",
};

// ============================================
// SERVICIOS
// ============================================

export const SERVICES = [
  { id: "proyectos-ejecutivos", name: "Proyectos Ejecutivos de Cableado" },
  { id: "cableado-certificado", name: "Cableado Estructurado Certificado" },
  { id: "fibra-optica", name: "Fibra Óptica" },
  { id: "memorias-tecnicas", name: "Memorias Técnicas" },
  { id: "certificaciones", name: "Certificaciones PANDUIT (25 años)" },
  { id: "mantenimiento", name: "Mantenimiento de Infraestructura" },
  { id: "consultoria", name: "Consultoría y Diseño de Red" },
];

// ============================================
// TIPOS DE SOLICITUD (SOPORTE)
// ============================================

export const REQUEST_TYPES = [
  { id: "soporte", name: "Soporte" },
  { id: "mantenimiento", name: "Mantenimiento" },
  { id: "emergencia", name: "Emergencia" },
  { id: "cotizacion", name: "Cotización" },
];

export const SEVERITY_LEVELS = [
  { id: "s1", name: "S1 - Crítica", description: "Sistema caído, operación detenida" },
  { id: "s2", name: "S2 - Alta", description: "Funcionalidad crítica afectada" },
  { id: "s3", name: "S3 - Media", description: "Funcionalidad parcialmente afectada" },
  { id: "s4", name: "S4 - Baja", description: "Consulta o mejora menor" },
];
