import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gymlog.app',
  appName: 'GymLog',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
