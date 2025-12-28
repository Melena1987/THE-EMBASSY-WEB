
export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  socials: {
    instagram?: string;
    twitter?: string;
  };
}

export interface Stat {
  value: string;
  label: string;
}

export interface VisionPoint {
  id: string;
  title: string;
  description: string;
}

export interface Partner {
  name: string;
  logoUrl: string;
  url: string;
}