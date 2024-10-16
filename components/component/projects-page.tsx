import Link from "next/link";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { JvZIcon } from "@/components/ui/icons";

interface ProjectScreenProps {
  onNavigateToHome: () => void;
  onNavigateToAcademics: () => void;
  onNavigateToContact: () => void;
}

export function ProjectsPage({ onNavigateToHome, onNavigateToAcademics, onNavigateToContact }: ProjectScreenProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <JvZIcon className="h-6 w-6" />
          <span className="sr-only">Jonathan van Zyl&apos;s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={onNavigateToHome}
          >
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-primary" prefetch={false}>
            Projects
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={onNavigateToAcademics}
          >
            Education
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={onNavigateToContact}
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I&apos;ve worked on and the technologies I&apos;ve used.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
              <Card>
                <CardHeader>
                  <img
                    src="/InfosysGolfBuggy.png"
                    alt="Project 1"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center w-full h-auto"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle>Autonomous Driving System</CardTitle>
                    <CardDescription>
                      Developed non-linear simulation models for a driving system, using OOP methods to create Particle
                      Swarm Optimisation and Genetic Algorithms with subswarms and island migration respectively, these
                      were used to fit the model&apos;s parameters and tune controller gains. Additionally, automatic
                      linearisation of the model for use in a linear Model Predictive Controller for trajectory tracking
                      was implemented.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Evolutionary Algorithms</Badge>
                    <Badge>Model Predictive Control</Badge>
                    <Badge>Python</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/Forze_FuelCell.png"
                    width="550"
                    height="310"
                    alt="Project 2"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle>Fuel-Cell Control System</CardTitle>
                    <CardDescription>
                      During time at Forze Hydrogen Racing, developed parts of a fuel cell control system. <br/>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><em>Anode Testbench:</em> created a grey box model of the anode system
                        from first principles and system identification. This was used to tune the
                        control system for the anode first upon simulation, then upon the testbench.</li>
                        <li><em>Fuel Cell supply system Software-In-Loop Simulator:</em> combined the models
                        of anode with a pre-made cathode model, merged with the finite state machines (FSMs) to operate
                        systems for the fuel cell. Provided a platform for the control system to be tested, to 
                        ensure the control system was working as intended. </li>
                        <li><em>Dry fuel cell testbench:</em> contributed to development of the FSMs needed 
                        to safely operate the fuel cell testbench.</li>
                        <li><em>Ejector testbench:</em> developed the control system files (Matlab/Simulink), and software (C++)
                        to run the testbench. Secondly, developed the FSMs, testbench and simulation framework. Finally, 
                        built a wiring harness to operate the testbench, and started to dry test it along with the software. Before 
                        running into issues with the embedded system itself.
                        </li>
                      </ul>                    
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Control Systems</Badge>
                    <Badge>Matlab/Simulink</Badge>
                    <Badge>FSM</Badge>
                    <Badge>Git</Badge>
                    <Badge>C++</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/QCANet_architecture.png"
                    width="550"
                    height="310"
                    alt="Project 3"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle>3D Semantic Segmentation of Mouse Nuclei</CardTitle>
                    <CardDescription>
                      Reproduced and evaluated the performance of QCANet, a novel approach
                      for instance segmentation in 3D fluroscence microscopy images, which combines
                      semantic segmentation with marker-based watershed techniques. Despite achieving satisfactory visual results,
                      significant quantitative discrepanices with the original study were observed, highlighting
                      challenges in hyperparameter tuning and reporoducibility. <br />
                      Blog is available: <Link href="https://jvanzyl1.github.io/3D-nuclei-segmentation-reproduction/README.html" className="text-primary" target="_blank" rel="noopener noreferrer">here</Link>. <br />
                      Code is available: <Link href="https://github.com/JvanZyl1/3D-nuclei-segmentation-reproduction" className="text-primary" target="_blank" rel="noopener noreferrer">here</Link>. <br />
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Deep Learning</Badge>
                    <Badge>OOP</Badge>
                    <Badge>Python</Badge>
                    <Badge>Pytorch</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/Optical_Flow.png"
                    width="550"
                    height="310"
                    alt="Project 4"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle>Autonomy computer vision software for a drone </CardTitle>
                    <CardDescription>
                      Using the  <a href="https://wiki.paparazziuav.org/wiki/Main_Page" className="text-primary" target="_blank" rel="noopener noreferrer">Paparrazi UAV</a> 
                      software, developed computer vision and navigation software with a team of my peers. Tested this in the 
                      <a  href="https://gazebosim.org/home" className="text-primary" target="_blank" rel="noopener noreferrer"> Gazebo</a> environment, aboard a Linus OS. 
                      This allowed the drone to autonomously navigate a course, and avoid obstacles within TU Delft&apos;s Cyberzoo. This provided 
                      hands-on experience in working with C, Linux OS and computer vision software. Projection, edge detection, background segmentation and 
                      optical flow were researched and trialled during this project.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Computer Vision</Badge>
                    <Badge>C</Badge>
                    <Badge>Linux OS</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/VeatleCFD.png"
                    width="550"
                    height="310"
                    alt="Project 4"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle>UAV eVTOL control system to counter urban turbluence </CardTitle>
                    <CardDescription>
                    May 2022 - June 2022 <br />
                    Design Synthesis Exercise, a 10 week group project for BSc Aerospace students at TU Delft for graduation. <br />
                    Brief: The design of an autonomous, sustainable, low-noise, electric vertical take-off Urban Air Mobility Vehicle
                    with a focus on control under urban turbulence. My part mainly focused on building a 6 degree of freedom controls model.
                    To simulate and control the vehicle&apos;s response to a 8 Beaufort gust and wake around the Shard building in London. <br />
                    <em>Presented at AIAA Student Conference 2022.</em> <br />
                    Sponsored by Eve, a subsidiary of Embraer. <br />
                    Awarded a grade of 8.5 <br />
                    <strong>View:</strong><a
                      href="AIAAAttendanceCertificate.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >AIAA Certificate of Attendance </a> <br />
                    <strong>View:</strong><a
                      href="VeatlePoster.png"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >  Poster </a>

                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Control System Design</Badge>
                    <Badge>Model Predictive Control</Badge>
                    <Badge>Matlab/Simulink</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/SupplierBizHacks.png"
                    width="550"
                    height="310"
                    alt="Project 4"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle>Websites </CardTitle>
                    <CardDescription>
                    Learned how to make front-end of website in a few hours during the 2024 iteration of the 
                    BizHacks hackathon in Bengaluru, India. Here I made two bare-boned UI&apos;s for a platform 
                    called <em>Cadence</em>. This was inspired by To-Good-To-Go, but for wholesale suppliers, along 
                    with an inventory management system: the aim to prevent food waste. <br />
                    <em>Won Most Colloborative Team Award</em> <br />
                    Following, decided to make the website you are seeing here, improving my skills through self-learning. <br />
                    Cadence website: <a href = "https://cadence-buyer-rgy48akyt-jvanzyl1s-projects.vercel.app/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">buyer</a> 
                    and <a href = "https://cadence-tester-gxpb9yx8x-jvanzyl1s-projects.vercel.app/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">seller</a>. <br />
                    Please note, I had no experience in website design before this.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Front-End</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/Pacman.png"
                    width="550"
                    height="310"
                    alt="Project 4"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle>Learning To Play Pacman from MsPacman </CardTitle>
                    <CardDescription>
                      Developed a deep reinforcement learning framework that applies transfer learning to accelerate the learning process in Ms.Pacman 
                      by utilizing pre-learned knowledge from Pacman. The project implemented advanced techniques including Intrinsic Curiosity Module (ICM), 
                      Double Q-Learning, Dueling Q-Networks, and Prioritized Experience Replay (PER) to enhance exploration and decision-making capabilities. 
                      This hierarchical approach enabled the agent to quickly adapt to the more complex environment of Ms.Pacman, significantly improving training 
                      efficiency compared to learning from scratch. The results demonstrated that transfer learning not only reduced computational requirements 
                      but also optimized the agent&apos;s performance in dynamic and challenging gaming scenarios. <br />
                      <strong>View:</strong><a
                        href="https://github.com/JvanZyl1/AtariRL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"> GitHub Repository here</a>.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>Deep Reinforcement Learning</Badge>
                    <Badge>Pytorch</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                    src="/LunarZebro.png"
                    width="550"
                    height="310"
                    alt="Project 4"
                    className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle>Student Dream-Teams</CardTitle>
                    <CardDescription>
                    Worked on solid rockets at DARE: Delft Aerospace Rocket Engineering. <br />
                    Designed an antenna deployment system for a Moon rover at Lunar Zebro.
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Aerospace Engineering</Badge>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <br/>
                    <CardTitle>Various other projects.</CardTitle>
                    <CardDescription>
                    Done through university assignments and online courses, a portfolio mainly of AI and controls projects. <br />
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Double Pendulum Control:</strong> Data-driven modelling (LNN, GPR) and Iterative Learning Control. </li>
                      <li><strong>XOR Classifier:</strong> Python and C++ (making classes from scratch).</li>
                      <li><strong>Various AI Classifiers:</strong> Including MNIST, Cat vs. Non Cat, succesful goalkeeper kicks. Using techniques of:
                      Convolutional & Recurrent NNs, Gated Recurrent Units and Long Short-Term Memories.   </li>
                      <li><strong>GNC System Development:</strong> modeled a satellite&apos;s non-linear dynamics in Simulink, including sensor models and fusion of a star tracking & IMU&apos;s measurements. Development of PID controllers to perform satellite rotations. </li>
                      <li><strong>VOR Flight Controller:</strong>  trimmed and linearized a nonlinear F16 model, before performing an open loop analysis on its eigenmodes. Development of a pitch rate command system satisfying CAP and Gibson specifications. Development of an automatic VOR controller. Done in Matlab/Simulink. </li>
                      <li><strong>
                      Multi-Objective Optimization of Vehicle Routing for Cost, Time, and Environmental Impact Reduction:</strong> Developed a multi-objective optimization model for vehicle routing that minimizes transportation costs, 
                        environmental impact, and delivery time using Mixed-Integer Linear Programming (MILP) and Gurobi solver. 
                        The model is designed to balance economic and environmental objectives, demonstrating potential applications 
                        for reducing operational expenses and carbon emissions in logistics operations.<br /><strong> View:</strong><a 
                          href = "https://github.com/JvanZyl1/VehicleRoutingProblem"
                          className="text blue-500 underline"
                          target="_blank"
                          rel="noopener noreferrer"> GitHub Repository </a>.</li>
                    </ul>
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>Artificial Intelligence</Badge>
                    <Badge>Control Systems Design</Badge>
                    <Badge>Operations Research</Badge>
                    <Badge>Git</Badge>
                    <Badge>Matlab/Simulink</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://github.com/JvanZyl1"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                target = "_blank"
                rel="noopener noreferrer"
              >
                View More on GitHub
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Jonathan van Zyl. All rights reserved.</p>
      </footer>
    </div>
  )
}