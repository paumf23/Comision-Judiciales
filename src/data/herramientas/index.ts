import { denunciaAdministrativa, type Herramienta } from './denuncia-administrativa';

export type { Herramienta };

// Array con todas las herramientas disponibles (se irán sumando las siguientes aquí)
export const herramientas: Herramienta[] = [
  denunciaAdministrativa,
];
