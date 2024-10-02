
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CheckCircle, Code, Laptop, Smartphone, Users } from "lucide-react"
import Link from "next/link"

export default function DevZoneLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Code className="h-6 w-6 mr-2" />
          <span className="font-bold">DevZone</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#goals">
            Goals
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#results">
            Results
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#18181b]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to DevZone
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                  Free education program for aspiring web and mobile developers
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href='https://forms.gle/eLKYJzNSZjjSjzfX8'
                  target="_blank">

                  <Button className="bg-white text-black hover:bg-zinc-200">
                    Apply Now

                  </Button>

                </Link>

                <Link href='https://docs.google.com/document/d/11R5O87G_dadfZapx4ZrylfKy-iLNMnRl7hIsmAM-Zws/edit?usp=sharing' target='_blank'>
                  <Button variant="outline" className="bg-[#18181b] text-white hover:text-[#18181b] ">
                    Learn More
                  </Button>
                </Link>


              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">About DevZone</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Laptop className="h-12 w-12 text-[#020817]" />
                  <h3 className="text-xl font-bold">Web Development</h3>
                  <p className="text-center text-zinc-500 dark:text-zinc-400">
                    Learn modern web technologies and frameworks
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Smartphone className="h-12 w-12 text-[#020817]" />
                  <h3 className="text-xl font-bold">Mobile Development</h3>
                  <p className="text-center text-zinc-500 dark:text-zinc-400">
                    Master the art of creating mobile applications
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <Users className="h-12 w-12 text-[#020817]" />
                  <h3 className="text-xl font-bold">Community</h3>
                  <p className="text-center text-zinc-500 dark:text-zinc-400">
                    Join a supportive community of learners and mentors
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="goals" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Goals and Aims</h2>
            <ul className="grid gap-6 md:grid-cols-2">
              {[
                "Provide free, high-quality education in web and mobile development",
                "Bridge the gap between academic learning and industry requirements",
                "Foster a supportive community of learners and mentors",
                "Equip students with practical skills for real-world projects",
                "Prepare students for successful careers in tech",
                "Promote diversity and inclusion in the tech industry",
              ].map((goal, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-[#020817]" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="results" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Results</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="text-4xl font-bold text-[#18181b]">30+</div>
                  <p className="text-xl text-center">Graduates</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="text-4xl font-bold text-[#18181b]">5</div>
                  <p className="text-xl text-center">Graduates Employed</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center space-y-4 p-6">
                  <div className="text-4xl font-bold text-[#18181b]">100%</div>
                  <p className="text-xl text-center">Free Education</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#18181b]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Ready to Start Your Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-zinc-200 md:text-xl">
                  Join DevZone today and take the first step towards your career in web and mobile development.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  href='https://forms.gle/eLKYJzNSZjjSjzfX8'
                  target="_blank">

                  <Button className="bg-white text-black hover:bg-zinc-200">
                    Apply Now
                  </Button>

                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 DevZone. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}