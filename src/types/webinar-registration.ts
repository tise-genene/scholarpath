export interface WebinarRegistration {
  webinarId: number;
  name: string;
  email: string;
  phone: string;
  country: string;
  institution: string;
  academicLevel: 'Undergraduate' | 'Graduate' | 'PhD' | 'Other';
}
