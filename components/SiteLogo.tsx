import Link from 'next/link';
import OBMLogo from './OBMLogo';
import { GlobalData } from '../lib/types';
import DarkModeToggle from 'components/ThemeToggle';

export default function SiteLogo({ siteData }: { siteData: GlobalData }): JSX.Element {
  return (
    <div className='mx-auto flex w-full max-w-3xl flex-row items-center justify-between px-4 py-4 tracking-tighter lg:px-0'>
      <h1 className='flex space-x-2 items-end'>
        <OBMLogo className='h-8 w-8' />
        <Link href='/' className='bg-gradient-to-r from-cyan-700 to-teal-600 bg-clip-text text-4xl font-bold text-transparent dark:from-cyan-300 dark:to-teal-200'>
          {siteData.metadata.site_title}
        </Link>
      </h1>
      <div className='flex gap-x-5 items-baseline'>
        <span className='hidden text-lg tracking-wide text-zinc-500 dark:text-zinc-200 md:flex top-[-7px] relative'>{siteData.metadata.site_tag}</span>
        <DarkModeToggle/>
      </div>
    </div>
  );
}
