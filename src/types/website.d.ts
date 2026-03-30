import type { Component } from 'vue'

export interface NavLink {
  label: string,
  target: string,
  url?: string
  variant?: 'call' | 'write' | 'chat'
}

export interface SchemaProperty<T = string> {
  property: string,
  value: T
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
  image: Image,
  component?: Component
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

export interface SchemaPersonData {
  givenName: string
  familyName: string
  alternateName: string
  phoneticName: string
  pronouns: string
  languages: {
    native: {
      name: string
      code: string
    }[],
    fluent: {
      name: string
      code: string
    }[]
  }
  relocationStatus: string
  nationality: {
    label: string
    content: string
  }
  knowsAbout: string[]
}

export interface SchemaAddress {
  street?: string
  city: string
  region?: string
  postalCode?: string
  country?: string
}

export interface SchemaJob {
  employer: string
  jobTitle: string
  startDate: string
  endDate?: string
  address?: SchemaAddress
  description?: string
  industry?: string
  techStack?: string[]
  responsibilities?: string[]
  achievements?: string[]
  occupation?: string
}

export interface SchemaEducation {
  name: string
  credentialName: string
  credentialStart: string
  credentialEnd: string
  credentialIssuer: string
  address?: SchemaAddress
  description?: string
  credentialStatus?: string
}

export interface SchemaCertification {
  name: string
  credentialName: string
  credentialStart: string
  credentialEnd: string
  credentialIssuer: string
  credentialStatus: string
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
  openSourceProjects: OpenSourceProject[],
  person: SchemaPersonData,
  jobs: SchemaJob[],
  education: SchemaEducation[]
}