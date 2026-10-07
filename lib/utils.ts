import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AGENCY_CONFIG = {
  name: 'Adeel Digital Agency',
  tagline: 'Your Growth Partner',
  email: 'adeeldigitalagency@gmail.com',
  phone: '03068851548',
  phoneDisplay: '+92 306 8851548',
  whatsappUrl: 'https://wa.me/923068851548',
  facebookUrl: 'https://web.facebook.com/profile.php?id=61594800629574',
  instagramUrl: 'https://www.instagram.com/adeeldigitalagency/?hl=en',
  location: 'Bahawalpur, Punjab, Pakistan',
  workingHours: 'Mon - Sat: 9:00 AM - 8:00 PM (PKT)',
  siteUrl: 'https://adeeldigitalagency.com',
};
