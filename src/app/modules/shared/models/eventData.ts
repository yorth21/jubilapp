export interface EventData {
  type: 'concert' | 'job';
  title: string;
  description: string;
  link: string;
  startDate: string;
  image: string;
  location: string;
}
