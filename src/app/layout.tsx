import '../styles/globals.css';
// import 'katex/dist/katex.css'
import localFont from '@next/font/local';

// export const BlackoutTwoAM = localFont({
//   src: '../assets/fonts/Blackout-TwoAm-Mod.ttf',
//   weight: '100',
// });
// export const BlackoutMidnight = localFont({
//   src: '../assets/fonts/Blackout Midnight.ttf',
//   weight: '100',
//   variable: '--midnight',
// });

const humane = localFont({
  src: '../assets/fonts/Humane-VF.ttf',
  variable: '--humane',
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={`${humane.variable} `}>
    <head />
    <body className="w-screen ">
      {/* <AuthContext> */}
      {/* <Nav /> */}

      {children}
      {/* <Footer /> */}
      {/* </AuthContext> */}
    </body>
  </html>
);

export default RootLayout;
