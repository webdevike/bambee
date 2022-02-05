import { NavigationBar, Footer } from "../components"


type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({
  children,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <NavigationBar />
        <main className="main">
          {children}
        </main>
      <Footer />
    </>
  )
}

export default Layout
