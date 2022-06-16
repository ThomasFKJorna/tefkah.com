import { Footer, FooterProps } from 'ui'

export interface BasicLayoutProps {
  footer: FooterProps
  children: React.ReactNode
}

export const BasicLayout = (props: BasicLayoutProps) => {
  const { footer, children } = props
  return (
    <div className="bg-gradient-to-b from-onyx to-slate-900 text-slate-50 ">
      <main className="w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-10 text-ice">
        {children}
      </main>
      <Footer {...footer} />
    </div>
  )
}

export default BasicLayout
