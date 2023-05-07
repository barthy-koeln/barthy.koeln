export interface NavLink {
  label: string,
  target: string
}

export interface SocialLink extends NavLink {
  icon: string
}

export interface Image {
  alt: string,
  width: number,
  height: number,
  src: string,
  attribution?: string
}

export interface ReferenceProject {
  name: string,
  link: string,
  image: Image
}

export interface OpenSourceProject {
  title: string,
  demoLink: string,
  githubLink: string,
  paragraphs: string[],
  image: Image
}