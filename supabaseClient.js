import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const SUPABASE_URL = 'https://example.com';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_0000';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

export const WHATSAPP_SOPORTE = 'https://wa.me/5491100000000';
export const URL_SOCIOS_INFO = 'https://example.com';
export const URL_PORTAL = '/portal-de-socios.html?acceso=ok';

export function urlBlobatar(semilla, tamano = 40) {
  const texto = (semilla ?? '').toString().trim() || 'socio';
  return `https://blobatar.dev/avatar/${encodeURIComponent(texto)}?size=${tamano}`;
}

export const HOSTS_PERMITIDOS = ['example.com'];

export function volverSeguro(valor) {
  if (!valor) return null;
  try {
    const u = new URL(valor);
    return u.protocol === 'https:' && HOSTS_PERMITIDOS.includes(u.hostname) ? u.href : null;
  } catch {
    return null;
  }
}

export async function irConTokenPrellenado(volverUrl) {
  // acá va la función que genera un token de un solo uso para pasar los datos del socio a otro sitio (no se incluye en el demo)
  window.location.href = URL_PORTAL;
}
