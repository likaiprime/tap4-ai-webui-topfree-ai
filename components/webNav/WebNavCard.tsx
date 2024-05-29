import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

import { WebNavigationListRow } from '@/lib/data';

import BaseImage from '../image/BaseImage';

export default function WebNavCard({ name, thumbnailUrl, title, url, content }: WebNavigationListRow) {
  return (
    <div className='flex flex-col gap-3 rounded-[2px] bg-[#FFFFFF] shadow-lg'>
      <Link href={`/ai/${name}`} title={title}>
        <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
          <BaseImage src={thumbnailUrl || ''} alt={title} title={title} className='w-full object-cover' />
        </div>
      </Link>
      <div className='flex items-center justify-between p-4'>
        <a href={url} title={title} target='_blank' rel='noreferrer' className='hover:opacity-70'>
          <h3 className='line-clamp-1 flex-1 text-2xl font-bold'>{title}</h3>
        </a>
        <a href={url} title={title} target='_blank' rel='noreferrer' className='hover:opacity-70'>
          <SquareArrowOutUpRight className='size-5' />
          <span className='sr-only'>{title}</span>
        </a>
      </div>
      <p className='line-clamp-5 p-4 text-xs lg:text-sm'>{content}</p>
    </div>
  );
}
