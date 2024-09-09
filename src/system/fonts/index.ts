import { Comfortaa } from 'next/font/google';
import localFont from 'next/font/local';

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-comfortaa',
});

export const norms = localFont({
  src: [
    { path: '../../../public/fonts/TTNorms-Thin.otf', weight: '100', style: 'normal' },
    { path: '../../../public/fonts/TTNorms-Light.otf', weight: '300', style: 'normal' },
    { path: '../../../public/fonts/TTNorms-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../../public/fonts/TTNorms-Bold.otf', weight: '800', style: 'normal' },
  ],
  variable: '--font-ttnorms',
});
