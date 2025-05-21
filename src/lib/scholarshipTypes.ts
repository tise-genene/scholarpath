export const SCHOLARSHIP_TYPES = {
  MERIT: "merit",
  NEED: "need",
  COMMUNITY: "community",
  LEADERSHIP: "leadership",
  ATHLETIC: "athletic",
} as const;

export const ELIGIBILITY_TYPES = {
  HIGH_SCHOOL: "highschool",
  UNDERGRAD: "undergrad",
  GRAD: "grad",
  INTERNATIONAL: "international",
} as const;

export const STUDY_FIELDS = {
  STEM: "stem",
  ARTS: "arts",
  BUSINESS: "business",
  HEALTH: "health",
  EDUCATION: "education",
} as const;

export type ScholarshipType = typeof SCHOLARSHIP_TYPES[keyof typeof SCHOLARSHIP_TYPES];
export type EligibilityType = typeof ELIGIBILITY_TYPES[keyof typeof ELIGIBILITY_TYPES];
export type StudyField = typeof STUDY_FIELDS[keyof typeof STUDY_FIELDS];

export const scholarshipTypeOptions = Object.entries(SCHOLARSHIP_TYPES).map(([key, value]) => ({
  value,
  label: key.replace(/_/g, ' ').toLowerCase(),
}));

export const eligibilityOptions = Object.entries(ELIGIBILITY_TYPES).map(([key, value]) => ({
  value,
  label: key.replace(/_/g, ' ').toLowerCase(),
}));

export const studyFieldOptions = Object.entries(STUDY_FIELDS).map(([key, value]) => ({
  value,
  label: key.replace(/_/g, ' ').toLowerCase(),
}));
