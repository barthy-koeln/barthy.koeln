export type NavLink = {
  label: string,
  target: string
}

export type SocialLink = NavLink & {
  icon: string
}

export type ReferenceProject = {
  name: string,
  link: string,
  image: string,
}

export type OpenSourceProject = {
  title: string,
  demoLink: string,
  githubLink: string,
  paragraphs: string[],

  image: {
    alt: string,
    width: number,
    height: number,
    src: string,
    attribution?: string
  }
}