import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { JvZIcon } from "@/components/ui/icons";
import emailjs from 'emailjs-com';

interface ContactScreenProps {
  onNavigateToHome: () => void;
  onNavigateToAcademics: () => void;
  onNavigateToProject: () => void;
}

export function ContactScreen({ onNavigateToHome, onNavigateToAcademics, onNavigateToProject }: ContactScreenProps) {

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      }, (error) => {
        console.error('Error sending email:', error.text);
      });
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <JvZIcon className="h-6 w-6" />
          <span className="sr-only">Jonathan van Zyl&apos;s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 flex-wrap items-center justify-end">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={onNavigateToHome}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
            onClick={onNavigateToProject}
          >
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
            className="text-sm font-medium hover:underline underline-offset-4 text-primary"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
      </header>

      <main className="flex-1">
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
                <Input type="text" name="user_name" placeholder="Name" className="max-w-lg flex-1" required />
                <Input type="email" name="user_email" placeholder="Email" className="max-w-lg flex-1" required />
                <Textarea name="message" placeholder="Message" className="max-w-lg flex-1" required />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-4 bg-white">
          <div className="container mx-auto flex flex-col gap-4 px-4 md:px-6">
            <div className="space-y-2">
              <div className="space-y-1">
                <h3 className="text-2xl font-bold">Email</h3>
                <p className="text-muted-foreground mx-2">
                  <a href="#" className="text-primary hover:underline">
                    jonathan.vanzyl2001@hotmail.com
                  </a>
                </p>
              </div>
              <div className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">Social Media</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="https://nl.linkedin.com/in/jonathan-van-zyl-5104b5202"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      LinkedIn
                    </Link>
                    <Link
                      href="https://github.com/JvanZyl1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      GitHub
                    </Link>
                  </div>
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
  );
}
