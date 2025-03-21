export interface EventData {
  type: 'concert' | 'event' | 'activity' | 'curse' | 'voluntarie';
  title: string;
  description: string;
  link: string;
  startDate: string;
  image: string;
  location: string;
}
