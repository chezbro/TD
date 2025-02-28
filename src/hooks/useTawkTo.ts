"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

export const useTawkTo = () => {
  useEffect(() => {
    // Initialize Tawk_API
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    // Load the tawk.to script
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67c0a9207ca289190cc516f7/1il4999ej';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }

    // Hide the widget by default
    window.Tawk_API.onLoad = function() {
      window.Tawk_API.hideWidget();
    };

    return () => {
      // Clean up if needed
      if (s1 && s1.parentNode) {
        s1.parentNode.removeChild(s1);
      }
    };
  }, []);

  const openChat = () => {
    if (window.Tawk_API) {
      if (window.Tawk_API.isChatHidden()) {
        window.Tawk_API.showWidget();
      }
      window.Tawk_API.maximize();
    }
  };

  return { openChat };
};

export default useTawkTo; 