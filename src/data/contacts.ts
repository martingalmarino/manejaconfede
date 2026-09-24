/**
 * Contact channels.
 * Keep whatsappNumber and commercialEmail as null until real values are supplied.
 * Never invent placeholders that look like real contacts.
 */
export interface ContactsConfig {
  /** International format without +, e.g. "5493511234567". */
  whatsappNumber: string | null;
  commercialEmail: string | null;
  mediaKitUrl: string | null;
}

export const contacts: ContactsConfig = {
  whatsappNumber: null,
  commercialEmail: null,
  mediaKitUrl: null,
};

export function isValidWhatsApp(number: string | null | undefined): number is string {
  if (!number) return false;
  return /^\d{10,15}$/.test(number.trim());
}

export function isValidEmail(email: string | null | undefined): email is string {
  if (!email) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function buildWhatsAppUrl(number: string, message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function courseInquiryMessage(courseLabel: string): string {
  return `Hola, vi la web de Manejá con Fede y quiero información sobre ${courseLabel} de Praga.`;
}
