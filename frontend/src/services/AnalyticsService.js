import ReactGA from 'react-ga4';

export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
    ReactGA.initialize(measurementId);
  }
};

export const trackPageView = (path) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
    ReactGA.send({ hitType: 'pageview', page: path });
  }
};

export const trackEvent = (category, action, label = null, value = null) => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (measurementId && measurementId !== 'G-XXXXXXXXXX') {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
      value: value,
    });
  }
};

// Common tracking helpers
export const trackContactSubmit = (success = true) => {
  trackEvent('Contact', 'Form Submit', success ? 'Success' : 'Failure');
};

export const trackOutboundLink = (url) => {
  trackEvent('Outbound Link', 'Click', url);
};
