import { Header } from "@/components/header";
import { Topbar } from '@/components/topbar'
import { MainNav } from '@/components/mainNav'
/* import { CardStarted } from "@/components/cardStarted"; */
import { MainContent } from "@/components/mainContent"; 

export default function Home() {
  return (
    <main>
      <Header>
        <Topbar />
        <MainNav />
      </Header>
      <MainContent>
       aaa
      </MainContent>
    </main>
  )
}
