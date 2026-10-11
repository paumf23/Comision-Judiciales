export interface Herramienta {
  id: string;
  categoria: string;
  titulo: string;
  pdfUrl: string;
  nombreArchivo?: string;
}

// Array con todas las herramientas y documentos disponibles
export const herramientas: Herramienta[] = [
  {
    id: 'denuncia-administrativa',
    categoria: 'Plantilla Modelo • Documento Administrativo',
    titulo: 'Modelo de denuncia administrativa por violencia y acoso laboral',
    pdfUrl: '/documentos/modelo-denuncia.pdf',
    nombreArchivo: 'modelo-denuncia.pdf',
  },
  {
    id: 'solicitar-proteccion',
    categoria: 'Plantilla Modelo • Medidas Preventivas',
    titulo: 'Modelo de nota para solicitar medidas de protección',
    pdfUrl: '/documentos/modelo-solicitar-proteccion.pdf',
    nombreArchivo: 'modelo-solicitar-proteccion.pdf',
  },
  {
    id: 'despues-de-denunciar',
    categoria: 'Guía Práctica • Proceso Posterior a la Denuncia',
    titulo: 'Después de denunciar',
    pdfUrl: '/documentos/despues-de-denunciar.pdf',
    nombreArchivo: 'despues-de-denunciar.pdf',
  },
  {
    id: 'guia-derechos-ante-junta-medica',
    categoria: 'Guía Práctica • Derechos ante Juntas Médicas',
    titulo: 'Guía de derechos de las personas trabajadoras ante las juntas médicas',
    pdfUrl: '/documentos/guia-derechos-ante-junta-medica.pdf',
    nombreArchivo: 'guia-derechos-ante-junta-medica.pdf',
  },
  {
    id: 'recomendaciones-concurrir-junta-medica',
    categoria: 'Guía Práctica • Evaluación y Junta Médica',
    titulo: 'Recomendaciones para concurrir a una Junta Médica',
    pdfUrl: '/documentos/recomendaciones-concurrir-junta-medica.pdf',
    nombreArchivo: 'recomendaciones-concurrir-junta-medica.pdf',
  },
  {
    id: 'indicadores-encerrona-institucional',
    categoria: 'Herramienta de Diagnóstico • Violencia Institucional',
    titulo: 'Indicadores de encerrona institucional',
    pdfUrl: '/documentos/indicadores-encerrona-institucional.pdf',
    nombreArchivo: 'indicadores-encerrona-institucional.pdf',
  },
  {
    id: 'indicadores-riesgo-salud',
    categoria: 'Herramienta de Diagnóstico • Salud y Trabajo',
    titulo: 'Indicadores de riesgo grave para la salud',
    pdfUrl: '/documentos/indicadores-riesgo-salud.pdf',
    nombreArchivo: 'indicadores-riesgo-salud.pdf',
  },
];
