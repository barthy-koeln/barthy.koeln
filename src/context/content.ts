import config from '../../content/config.yml'
import navigation from '../../content/navigation.yml'
import skills from '../../content/skills.yml'
import person from '../../content/person.yml'
import experience from '../../content/experience.yml'
import education from '../../content/education.yml'
import type { PageContent, SchemaEducation, SchemaJob, SchemaPersonData } from '../types/website'

const content: PageContent = {
  ...config,
  ...navigation,
  skills,
  person: person as SchemaPersonData,
  jobs: (experience as { jobs: SchemaJob[] }).jobs,
  education: (education as { education: SchemaEducation[] }).education,
} as unknown as PageContent

export { content }