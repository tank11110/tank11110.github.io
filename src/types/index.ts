export interface LocalizedString {
  zh: string
  en: string
}

export interface AboutData {
  name: LocalizedString
  role: string
  desc: LocalizedString
  contact: {
    email: string
    github: string
    githubUrl: string
    location: LocalizedString
  }
}

export interface ProjectData {
  name: string
  url: string
  urlLabel: string
  desc: LocalizedString
  stack: string[]
}

export interface ExperienceData {
  period: string
  role: LocalizedString
  company: LocalizedString
  desc: LocalizedString
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface EducationData {
  school: LocalizedString
  degree: LocalizedString
  period: string
}

export interface CollabItem {
  icon: string
  title: LocalizedString
  desc: LocalizedString
}

export interface CollabData {
  items: CollabItem[]
  cta: {
    title: LocalizedString
    desc: LocalizedString
    buttonLabel: LocalizedString
    email: string
  }
}

export type Lang = 'zh' | 'en'
