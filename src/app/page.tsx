import { MainNav, Topbar, CardStarted, Header, AboutMe, MainContent } from "@/components";

export default function Home() {
  return (
    <main>
      <Header>
        <Topbar />
        <MainNav />
      </Header>
      <MainContent>
        <CardStarted />
        <AboutMe />
      </MainContent>
    </main>
  )
}
