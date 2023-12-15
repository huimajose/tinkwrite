import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { formatDistanceToNow } from 'date-fns';


 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
};

export  const formatDateDistance = (dateString: string): string => {
  const createdDate = new Date(dateString);
  const now = new Date();

  return formatDistanceToNow(createdDate, { addSuffix: true, locale: ptBR }); // Adapte a localização conforme necessário
};

