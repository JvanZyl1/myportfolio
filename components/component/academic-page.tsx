import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { JvZIcon } from "@/components/ui/icons"

interface AcademicsScreenProps {
  onNavigateToHome: () => void;
  onNavigateToProject: () => void; // Add this line
  onNavigateToContact: () => void;
}

export function AcademicPage({onNavigateToProject, onNavigateToHome, onNavigateToContact} : AcademicsScreenProps) {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <JvZIcon className="h-6 w-6" />
          <span className="sr-only">Jonathan van Zyl&apos;s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 flex-wrap items-center justify-end">
          <Link href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
          onClick={onNavigateToHome}>
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary"
            prefetch={false}
            onClick={onNavigateToProject}
          >
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4 text-primary"
            prefetch={false}
          >
            Education
          </Link>
          <Link href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
          onClick={onNavigateToContact}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="education" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Education</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Qualifications</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out my educational background and the degrees I&apos;ve earned.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col gap-8 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-12">
            <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Master&apos;s Degree</h3>
                  <p className="text-muted-foreground">
                    Writing MSc Aerospace Engineering at TU Delft, Netherlands <br />
                    Specialising in control and simulation, with a focus on autonomous systems. <br />
                    Graduating in August 2025. <br />
                    Electives: <em> Object-Orientated Programming in C++, 
                      Intelligent Control System, 
                      Bio-Inspired Intelligence and Learning, 
                      Autonomous Micro-Air Vehicles,
                      Deep Learning, 
                      Intermediate Economics,
                      Research Methodologies
                    </em> <br />
                    Partially followed courses of <em> Deep Reinforcement Learning and Evolutionary Algorithms</em>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>TU Delft</Badge>
                  <Badge>September 2023 - August 2025</Badge>
                  <a href="https://studiegids.tudelft.nl/a101_displayProgram.do?program_tree_id=31378"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Badge variant="custom" className="bg-blue-500 text-white">Course Description Link</Badge>
                  </a>
                </div>
              </div>


              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Bachelor&apos;s Degree</h3>
                  <p className="text-muted-foreground">
                    BSc Aerospace Engineering at TU Delft. <br />
                    3rd best Aerospace Engineering faculty in the world according to <a href = "https://www.topuniversities.com/university-subject-rankings/mechanical-aeronautical-manufacturing-engineering"
                    className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                    QS World University Rankings. </a><br />
                    Graduation project: <em>
                      Design and implementation of a control system for a eVTOL UAV, 
                      under the influence of wind gusts. Presented at AIAA Student Conference 2022.
                    </em> <br />
                    Participated in the <em> Delft Aerospace Rocket Engineering</em> and
                    <em> Lunar Zebro </em> student teams.                    
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>TU Delft</Badge>
                  <Badge>September 2019- June 2022</Badge>
                  <a href="https://studiegids.tudelft.nl/a101_displayProgram.do?program_tree_id=31364"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Badge variant="custom" className="bg-blue-500 text-white">Course Description Link</Badge>
                  </a>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Minor Abroad</h3>
                  <p className="text-muted-foreground">
                    Focus on taking courses from MSc Space Engineering, while immersing in Spanish culture. <br />
                    Courses: <em>
                      Antennas and Radio Propogation, 
                      Attitude Dynamics, Guidance, Navigation and Control, 
                      Earth Observation Data Processing, 
                      Introduction to Business Management, 
                      Space Propulsion, 
                      Space Robotics and Automation, 
                      Space Science
                    </em> and <em> Spanish</em>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>Universidad Carlos III de Madrid</Badge>
                  <Badge>September 2021 - January 2022</Badge>
                  <a href="https://www.uc3m.es/master/space-engineering#curriculum"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Badge variant="custom" className="bg-blue-500 text-white">Course Description Link</Badge>
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Additional Education</h3>
                  <p className="text-muted-foreground">
                  Twycross House School, United Kingdom; A-levels: A* Mathematics, A Physics, A Economics <br />
                    Courses in deep learning by DeepLearning.AI: <em> 
                      Impoving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization, 
                      Structuring Machine Learning Projects, 
                      Neural Networks and Deep Learning.
                    </em>. <br />
                    Learning on the job.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge>High School</Badge>
                  <Badge>Coursera</Badge>
                  <a href="https://www.coursera.org/account/accomplishments/verify/7JK9V4H8L88V"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Badge variant="custom" className="bg-blue-500 text-white">Improving DNN Credential</Badge>
                  </a>
                  <a href="https://www.coursera.org/account/accomplishments/certificate/NQFNAQGUT6L9"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Badge variant="custom" className="bg-blue-500 text-white">Structuring ML Credential</Badge>
                  </a>
                  <a href="https://www.coursera.org/account/accomplishments/verify/9SRDL5MWU979"
                    target="_blank"
                    rel="noopener noreferrer">
                    <Badge variant="custom" className="bg-blue-500 text-white">Neural Networks Credential</Badge>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Jonathan van Zyl. All rights reserved.</p>
      </footer>
    </div>
  )
}