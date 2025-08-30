import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.52d92321c225406f90782c20300f84c6',
  appName: 'college-bus-compass',
  webDir: 'dist',
  server: {
    url: 'https://52d92321-c225-406f-9078-2c20300f84c6.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  }
};

export default config;