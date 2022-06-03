import { Footer, FooterProps } from 'ui'

export interface BasicLayoutProps {
  footer: FooterProps
  children: React.ReactNode
}

export const BasicLayout = (props: BasicLayoutProps) => {
  const { footer, children } = props
  return (
    <div className="bg-gradient-to-b  to-blood-900 via-blood-900 from-blood-100 ">
      <main className="dark:bg-slate-800 w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-10 text-ice">
        {children}
      </main>
      <Footer {...footer} />
    </div>
  )
}

export default BasicLayout
