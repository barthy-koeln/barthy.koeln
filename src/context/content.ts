import config from '../../content/config.yml'
import navigation from '../../content/navigation.yml'
import skills from '../../content/skills.yml'
import type { PageContent } from '../types/website'

const content: PageContent = {
  ...config,
  ...navigation,
  skills
} as unknown as PageContent

export { content }