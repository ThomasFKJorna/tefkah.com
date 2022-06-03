// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export const Document = () => (
  <Html>
    <Head />
    <body className="bg-gradient-to-b dark:bg-gradient-to-b dark:from-slate-800 dark:to-onyx dark:via-onyx  to-blood-900 via-blood-900 from-blood-100 flex items-center justify-center flex-col gap-10 text-cool">
      <Main />
      <NextScript />
    </body>
  </Html>
)
export default Document
