export type AnalyticsEventName =
  | 'course_cta'
  | 'collaboration_cta'
  | 'instagram_click'
  | 'youtube_channel_click'
  | 'video_activation';

export interface AnalyticsPayload {
  section?: string;
  courseId?: string;
  label?: string;
  [key: string]: string | undefined;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Minimal analytics helper for future measurement setup.
 * Does not load any tracking provider. Never send PII or form bodies.
 */
export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  const event = {
    event: name,
    ...payload,
  };

  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);

  if (import.meta.env.DEV) {
    console.debug('[analytics]', event);
  }
}
