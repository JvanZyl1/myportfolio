import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { JvZIcon } from "@/components/ui/icons";
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

interface HomeScreenProps {
  onNavigateToProject: () => void;
  onNavigateToAcademics: () => void;
  onNavigateToContact: () => void;
}

export function HomeScreen({ onNavigateToProject, onNavigateToAcademics, onNavigateToContact }: HomeScreenProps) {
  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('service_eq4mjgd', 'template_380vf3b', e.target as HTMLFormElement, 'hHcxzty4fU_4xzNsN')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormData({ from_name: '', user_email: '', message: '' }); // Clear the form fields upon success
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <JvZIcon className="h-6 w-6" />
          <span className="sr-only">Jonathan van Zyl&apos;s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={onNavigateToProject}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={onNavigateToAcademics}>
            Education
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false} onClick={onNavigateToContact}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-6 md:gap-8 px-4 sm:px-6 md:px-10 md:grid-cols-2">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-[3.4rem] 2xl:text-[3.75rem] leading-tight lg:leading-tighter">
                  Jonathan van Zyl
                </h1>
                <p className="text-muted-foreground text-base sm:text-lg md:text-xl">Controls and AI Engineer</p>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
                  MSc Aerospace Engineering Student at TU Delft, graduating in Summer 2025, having held positions 
                  at Forze Hydrogen Racing and Infosys, along with part-time positions at student teams: Lunar Zebro and DARE (Moon Rover and Rockets).
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-lg">
                  I&apos;m a passionate engineer with expertise in aerospace, controls, and artificial intelligence.
                  My goal is to create innovative solutions that solve real-world problems.
                </p>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    onClick={onNavigateToProject}
                  >
                    View Projects
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    onClick={onNavigateToContact}
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">My Work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of the projects I&apos;ve worked on and the technologies I&apos;ve used.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-[1300px]">
              <Carousel className="w-full" opts={{ loop: true }}>
                <CarouselContent>
                  <CarouselItem>
                    <Card>
                      <CardHeader>
                        <img
                          src="/QCANet_architecture.png"
                          className="w-full h-auto mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                        />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <CardTitle>3D CNN for semantic segmentation of mouse embroygeneous.</CardTitle>
                          <CardDescription>
                          3D convolutional neural networks-based segmentation to acquire quantitative criteria of the nucleus during mouse embryogenesis
                          <br />
                          <Link href="https://jvanzyl1.github.io/3D-nuclei-segmentation-reproduction/README.html"
                          target="_blank"
                          rel="noopener noreferrer">
                          Read the Article by clicking here!
                          </Link>
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Artifical Intelligence</Badge>
                          <Badge>Python</Badge>
                          <Badge>Pytorch</Badge>
                          <Badge>OpenCV</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardHeader>
                      <img
                        src="/SupplierBizHacks.png"
                        className="w-full h-auto mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"
                      />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <CardTitle>Cadence</CardTitle>
                          <CardDescription>
                          A take on &apos;To-Good-To-Go&apos; meets &apos;Uber Eats&apos; for preventing food spoilage in bulk selling firms.
                          <br />
                          Entry for BizHack 2024 Hackathon, won &apos;Most Collaborative Team&apos; award.
                          <br />
                          Learn front-end development in 4 hours to make these mockup UIs: 
                          <Link href="https://cadence-tester-gxpb9yx8x-jvanzyl1s-projects.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="Link">
                           supplier UI  
                          </Link> and  
                          <Link href="https://cadence-buyer.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="Link">
                            buyer UI
                          </Link>.
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Frontend</Badge>
                          <Badge>Idea Brainstorming</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardHeader>
                      <video
                        src="/DroneWorking.mp4"
                        className="w-full h-auto mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center" controls>
                        <track kind="captions" src="/captions.vtt" label="English" srcLang="en" default />
                      </video>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <CardTitle>Computer vision and navigation module for drone</CardTitle>
                          <CardDescription>
                          Worked in the paparrazi environment to design a computer vision system for drone navigation.
                          <br />
                          Tested in the TU Delft MAV Lab.
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Computer Vision</Badge>
                          <Badge>C</Badge>
                          <Badge>Python</Badge>
                          <Badge>Drones</Badge>
                          <Badge>OpenCV</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardHeader>
                      <img
                        src="/Forze_FuelCell.png"
                        className="w-full h-auto mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center" />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <CardTitle>Forze Hydrogen Racing</CardTitle>
                          <CardDescription>
                          Working on a future Le Mann 24 hour hydrogen race car:
                          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                            <li> Anode hydrogen flow control system. </li>
                            <li> Fuel cell software-in-the-loop simulator. </li>
                            <li> Ejector test-bench </li>
                          </ul>
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Matlab/Simulink</Badge>
                          <Badge>Control Systems</Badge>
                          <Badge>Hydrogen Fuel Cells</Badge>
                          <Badge>C++</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Card>
                      <CardHeader>
                      <img
                          src="/Veatle.png"
                          className="w-full h-auto mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center" />
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <CardTitle>BSc Thesis</CardTitle>
                          <CardDescription>
                          Design of a non-linear model predictive controller for a eVTOL under urban turbluence.
                          <br />
                          Presented at the 2022 AIAA Student Conference in Adelaide, Australia.
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge>Matlab/Simulink</Badge>
                          <Badge>Control Systems</Badge>
                          <Badge>Model Predictive Controller</Badge>
                          <Badge>Aerospace Engineering</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                  <CarouselItem>
                    <Link href="#" // Adjust the link to point to your specific project.
                          className="block hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-white border rounded-lg"
                          prefetch={false}
                          onClick={onNavigateToProject}>
                      <Card className="p-6 flex flex-col items-center justify-center text-center">
                        <CardContent>
                          <h2 className="text-2xl font-bold text-primary mb-3">Explore All Projects!</h2>
                          <p className="text-gray-600 mb-6">
                            Dive into the details of all my projects and see the technologies I&apos;ve worked with.
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                href="https://github.com/JvanZyl1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                View More on GitHub
              </Link>
              <Link
                href="https://nl.linkedin.com/in/jonathan-van-zyl-5104b5202"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">My Skills and Experience</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;m a skilled engineer with a passion for building innovative control systems using novel technologies.
                  My areas of interest are: Deep Learning, Reinforcement Learning, Control Theory,
                  Operations Research,  Evolutionary Algorithms, Swarming Intelligence and Intelligent Controls. Open to working
                  on new projects and collaborations in different fields.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl grid gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="col-span-2">
                  <ul className="space-y-4">
                      <li>
                          <h3 className="text-xl font-bold">Controls Engineering</h3>
                          <p className="text-muted-foreground">
                              Proficient in Matlab/Simulink, Python, C and C++. Experienced in designing and implementing control systems
                              both PID and MPC, for a hydrogen race car and autonomous vehicle in real-life. Also, VOR, pitch-rate and GNC satellite using PID, and an
                              urban air mobility vehicle using MPC; in simulation for University projects. Developed FSMs, tuned controllers in real-life and implemented
                              evolutionary algorithms (GA and PSO) to optimize controllers.
                              <br />
                              <em>Intelligent control systems:</em> Data-driven modelling (LNN, GPR) and Iterative Learning Control.
                          </p>
                      </li>
                      <li>
                          <h3 className="text-xl font-bold">Artificial Intelligence</h3>
                          <p className="text-muted-foreground">
                              Proficient in Python, Pytorch and OpenCV.
                              <br />
                              <em>Data driven modelling:</em> LNN for double pendulum simulation & NARX for system identification of a hydrogen flow simulation.
                              <br />
                              <em>Deep Learning:</em> 3D CNN for semantic segmentation of mouse embryogenesis, and a CNN for image classification.
                              <br />
                              <em>Reinforcement Learning:</em> transfer learning to play MsPacman from Pacman.
                              <br />
                              <em>Machine Learning:</em> including XOR (Python & C++) and MINST. CNN, RNN, LSTM, GRU, GAN and Transformers.
                          </p>
                      </li>
                      <li>
                          <h3 className="text-xl font-bold">&apos;Aerospace&apos; Engineering</h3>
                          <p className="text-muted-foreground">
                              <em>Operations Research:</em> solved vehicle routing problems using Mixed-Integer Linear Programming.
                              <br />
                              <em>Computer vision:</em> for a drone&apos;s navigation system.
                              <br />
                              <em>Engineering:</em> hold a BSc at the 3rd best Aerospace Engineering University in World and 1st in Europe. Now pursuing my MSc at the 
                              Aeropsace Engineering faculty of TU Delft on the Simulation and Controls track.
                          </p>
                      </li>
                  </ul>
              </div>
              <div className="col-span-1 flex flex-wrap items-center justify-center gap-2 py-4">
                  <Badge className='bg-blue-500 text-white'>Control Systems</Badge>
                  <Badge className='bg-blue-500 text-white'>Hydrogen Fuel Cells</Badge>
                  <Badge className='bg-blue-500 text-white'>Drones</Badge>

                  <Badge className='bg-red-500 text-white'>C++/C</Badge>
                  <Badge className='bg-red-500 text-white'>Python</Badge>
                  <Badge className='bg-red-500 text-white'>Matlab/Simulink</Badge>

                  <Badge className='bg-orange-500 text-white'>Operations Research</Badge>
                  <Badge className='bg-orange-500 text-white'>Artificial Intelligence</Badge>
                  <Badge className='bg-orange-500 text-white'>Reinforcement Learning</Badge>
                  <Badge className='bg-orange-500 text-white'>Evolutionary Algorithms</Badge>
                  <Badge className='bg-orange-500 text-white'>Swarming Intelligence</Badge>
                  <Badge className='bg-orange-500 text-white'>Intelligent Controls</Badge>
                  <Badge className='bg-orange-500 text-white'>Front End</Badge>

              </div>
          </div>
          </div>
        </section>
        <section id="education" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Education</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl">My Background</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a strong academic foundation that has prepared me for a successful career.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:left-0 grid gap-10">
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">June 2019 - Graduated High School</div>
                    <div className="text-muted-foreground">
                      Twyross House School, United Kingdom.
                      <br />
                      A-levels: A* Maths, A Economics, A Physics</div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">September 2019 - Started University</div>
                    <div className="text-muted-foreground">
                      Began my Bachelor&apos;s degree in Aerospace Engineer at TU Delft, Netherlands
                    </div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">September 2021 to February 2022 - Minor Abroad</div>
                    <div className="text-muted-foreground">
                      Universidad Carlos III de Madrid.
                      <br />
                      Courses from MSc Space Engineering, with supplementary courses in Business and Spanish.
                    </div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">June 2022 - Achieved BSc</div>
                    <div className="text-muted-foreground">
                      Earned my Bachelor of Science.
                      <br />
                      Scoring 8.5/10 in my final year project.
                      <br />
                      Part-time positions at student teams:
                      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                        <li>Solid Propulsion Engineer at <a href="https://dare.tudelft.nl/" className="text blue-500 underline" target="_blank" rel="noopener noreferrer">DARE</a>.</li>
                        <li>Mechanics Engineer at <a href="https://zebro.space/" className="text blue-500 underline" target="_blank" rel="noopener noreferrer">Lunar Zebro</a>.</li>
                      </ul>                    
                    </div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">August 2022 to 2023 - Started Career: Forze Hydrogen Racing</div>
                    <div className="text-muted-foreground">
                      Full time Simulations and Control Engineer on the World&apos;s fastest Hydrogen race-car.
                    </div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">September 2023 - Started MSc</div>
                    <div className="text-muted-foreground">
                      MSc Aerospace Engineering, Control and Simulation.
                      <br />
                      TU Delft, Netherlands.
                    </div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">July to September 2024 - Controls Internship</div>
                    <div className="text-muted-foreground">
                      Instep internship program at Infosys
                      <br />
                      Bangalore, India.
                    </div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">October 2024 to June 2025 - MSc Thesis</div>
                    <div className="text-muted-foreground">
                      In a topic of my interest.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 relative pl-6 after:right-0 grid gap-10">
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute right-0 translate-x-[29.5px] z-10 top-1" />
                    <div className="font-medium">High School Diploma</div>
                    <div className="text-muted-foreground">A-levels: A* Maths, A Physics, A Economics</div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute right-0 translate-x-[29.5px] z-10 top-1" />
                    <div className="font-medium">Bachelor of Science in Aerospace Engineering</div>
                    <div className="text-muted-foreground">Delft University of Technology</div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute right-0 translate-x-[29.5px] z-10 top-1" />
                    <div className="font-medium">Minor in Space Engineering</div>
                    <div className="text-muted-foreground">Universidad Carlos III de Madrid</div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute right-0 translate-x-[29.5px] z-10 top-1" />
                    <div className="font-medium">Pursuing Masters of Science in Aerospace Engineering <br /> Control and Simulation</div>
                    <div className="text-muted-foreground">Delft University of Technology</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                onClick = {onNavigateToAcademics}>
                View My Academic Resume.
              </Link>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I&apos;d love to hear from you! Feel free to reach out with any questions or opportunities.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex flex-col gap-4" onSubmit={sendEmail}>
                <Input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  className="max-w-lg flex-1"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  className="max-w-lg flex-1"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Message"
                  className="max-w-lg flex-1"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
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