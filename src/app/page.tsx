import { MainNav, Topbar, CardStarted, Header, AboutMe, MainContent, Resume } from "@/components";

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
        <Resume />
      </MainContent>
    </main>
  )
}
