import { TopNav } from "@/components/TopNav"
import { navItems } from "@/Data/data"
import Hero from "@/components/Hero"
import Grid from "@/components/GridLayout"
import Footer from "@/components/Footer"
import Client from "@/components/Client"

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <TopNav navItems={navItems} />
          <Hero />
          <Grid />
          <Footer />
          <Client />
        </div>
      </main>
    </>
  )
}
