const ua = typeof navigator === 'undefined' ? '' : navigator.userAgent;

export const isMobile = /Android|iPhone|iPad|Mobile/i.test(ua);
