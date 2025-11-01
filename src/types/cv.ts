export interface Experience {
  company: string;
  time: string;
  title: string;
  location?: string;
  description?: string;
}

export interface Education {
  school: string;
  time: string;
  degree: string;
  location?: string;
  description?: string;
}

export interface Skill {
  title: string;
  description: string;
}

export interface Publication {
  title: string;
  authors: string;
  journal: string;
  time: string;
  link?: string;
  abstract?: string;
  type?: string;
}

export interface Grant {
  title: string;
  time: string;
  description?: string;
  school?: string; // Optional, in case the grant is related to Education
  degree?: string; // Optional, in case the grant is related to Education
  location?: string;
}

export function isExperience(
  element: Experience | Education | Grant,
): element is Experience {
  return "title" in element && "company" in element;
}

export function isEducation(
  element: Education | Experience | Grant,
): element is Education {
  return "school" in element && "degree" in element;
}

export function isSkill(element: Skill | Publication): element is Skill {
  return "description" in element;
}

export function isPublication(
  element: Skill | Publication,
): element is Publication {
  return "authors" in element;
}
