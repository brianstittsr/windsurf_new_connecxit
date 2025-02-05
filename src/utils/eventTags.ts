export interface TagCategory {
  id: string;
  name: string;
  tags: string[];
}

export const tagCategories: TagCategory[] = [
  {
    id: 'location',
    name: 'Location',
    tags: [
      'United States Events',
      'North Carolina Events',
      'South Carolina Events',
      'Georgia Events',
      'Virginia Events',
      'Florida Events'
    ]
  },
  {
    id: 'city',
    name: 'City',
    tags: [
      'Things to do in Charlotte, NC',
      'Things to do in Raleigh, NC',
      'Things to do in Durham, NC',
      'Things to do in Greensboro, NC',
      'Things to do in Winston-Salem, NC'
    ]
  },
  {
    id: 'event_type',
    name: 'Event Type',
    tags: [
      'Charlotte Festivals',
      'Charlotte Business Festivals',
      'Charlotte Music Festivals',
      'Charlotte Food Festivals',
      'Charlotte Art Festivals'
    ]
  },
  {
    id: 'career',
    name: 'Career',
    tags: [
      '#job_fairs',
      '#career_fair',
      '#job_fair',
      '#career_fairs',
      '#employment_event',
      '#employment_opportunity',
      '#hiring_event',
      '#charlotte_career_fairs',
      '#charlotte_job_fairs',
      '#charlotte_jobs'
    ]
  },
  {
    id: 'industry',
    name: 'Industry',
    tags: [
      '#technology_jobs',
      '#healthcare_jobs',
      '#finance_jobs',
      '#manufacturing_jobs',
      '#retail_jobs',
      '#education_jobs'
    ]
  },
  {
    id: 'experience',
    name: 'Experience Level',
    tags: [
      '#entry_level',
      '#mid_level',
      '#senior_level',
      '#executive',
      '#internship'
    ]
  }
];
