import type { ReactNode } from "react";

export interface profile_card {
  name: string;
  bio: string;
  avatar: string;
  location: string;
  socialLinks: {
    platform: string;
    url: string;
    icon: ReactNode;
  }[];
}
