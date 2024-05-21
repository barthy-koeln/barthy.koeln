export interface NavLink {
  label: string,
  target: string,
  variant?: 'call'|'write'|'chat'
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

export interface PageMeta {
  defaultTitle: string,
  defaultDescription: string,
  titleSuffix: string,
  imageUrl: string
  canonicalUrl: string
}

export interface SkillGroup {
  name: string,
  skills: []
}

export interface PageContent {
  meta: PageMeta,
  contact: NavLink[],
  contactPrint: NavLink[],
  links: NavLink[],
  socialLinks: NavLink[],
  skills: {
    core: SkillGroup[],
    specialized: SkillGroup[]
    emerging: SkillGroup[]
  }
  referenceProjects: ReferenceProject[],
  openSourceProjects: OpenSourceProject[]
}