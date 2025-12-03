import type { profile_card } from "../../features/profile_card/types/profile.interface";
import { SiGithub, SiLinkedin } from "react-icons/si";
export const PROFILE_CARD_DATA: profile_card = 
  {
    name: "Oscar Ramirez",
    bio: "💻 Software Developer | Building Foundations in Full-Stack Development ⚡",
    avatar: "/images/avatar_profile.png",
    location: "Ambato, Ecuador",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/OscarJRM",
        icon: <SiGithub />,
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/oscar-ram%C3%ADrez-manzano-b65941226/",
      icon: <SiLinkedin />,
    },
  ]
}
