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