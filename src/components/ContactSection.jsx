import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { cn } from '@/lib/utils'
import { useToast } from "./hooks/Use-toast.js"
import { useState } from "react"

export const ContactSection = () => {
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        setTimeout(() => {
            toast({
                title: "Message sent..!",
                description: "Thank you for message. I'll get back to you soon."
            });
            setIsSubmitting(false)

        }, 1500)
    }
    return (
        <section
            className="py-24 px-4 relative bg-secondary/30"
            id="contact">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary">Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2  gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact information</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">E-mail</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        href="mailto:ahmedhanymokhtar2011@gmail.com">
                                        ahmedhanymokhtar2011@gmail.com
                                    </a>
                                </div>
                            </div>

                            {/*phone */}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                        href="tel:+01028588379">
                                        +20 (102) 858-8379
                                    </a>
                                </div>
                            </div>
                            {/* map*/}
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        AinShams , Cairo ,Egypt
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect with Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a
                                    href="https://www.linkedin.com/in/ahmed-hanymokhtar-610902303/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"

                                    target="_blank">

                                    <Linkedin />
                                </a>

                                <a href="https://github.com/ahmedhanymokhtar2011"
                                    target="_blank">
                                    <Github />
                                </a>
                                <a href="https://wa.me/201028588379?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%87%D9%84%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D9%8A%20%D8%A7%D9%84%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83"
                                    target="_blank">
                                    <MessageCircle />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs"
                        onSubmit={handleSubmit}
                    >
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>
                        <form className="space-y-6">

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium mb-2"
                                >Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your name here..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >Your E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Your email here..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium mb-2"
                                >Your message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Your message here..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("consmic-button w-full flex items-center justify-center gap-2")}
                            >
                                {isSubmitting ? "sending..." : "send message"}
                                <Send size={16} />
                            </button>
                            <div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}