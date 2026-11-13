import type { SvgComponent } from "astro/types"
import Email from "@/assets/icons/email.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"
import GitHub from "@/assets/icons/github.svg"

export const SITE = {
  title: "Sai Prateek Katkam",
  description: "Things worth thinking through in public, published as they're ready.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/opengraph-image.png",
  defaultPostImage: "/static/1200x630.png",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://www.linkedin.com/in/prateek-katkam/", label: "LinkedIn", icon: LinkedIn },
  { href: "https://github.com/ACPpradyuman1", label: "GitHub", icon: GitHub },
  { href: "mailto:saiprateekkatkam@gmail.com", label: "Email", icon: Email },
]
