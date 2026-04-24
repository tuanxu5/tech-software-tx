export const IconsAssets = {
  facebook: '/icons/icons-facebook.svg',
  github: '/icons/icons-github.svg',
  linkedin: '/icons/icons-linkedIn.svg',
  telegram: '/icons/icons-telegram.svg',
  zalo: '/icons/icons-zalo.svg',
} as const;

export type IconName = keyof typeof IconsAssets;
