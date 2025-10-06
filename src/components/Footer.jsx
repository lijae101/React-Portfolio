import { ArrowUp } from "lucide-react"

export const Footer = () => {

    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 items-center flex flex-wrap justify-between">
        <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} Liam Janicke</p>
    
    <a href="#hero" className="rounded-full p-2 bg-primary/10 hover:bg-primary/20 text-primary transition-colors"><ArrowUp size={20} /></a>
    </footer>
}