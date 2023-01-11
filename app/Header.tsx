
import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link';
////npm install @heroicons/react



function Header() {
    return (
        <header>

            <div className="grid grid-cols-3 p-10 items-center">
                {/*grid col 3 e böldü*/}
                <Bars3Icon className="h-8 w-8 cursor-pointer" />
                {/*cursor logo*/}
                <Link href="/" prefetch={false} >
                    <h1>The NEWBEETOMATO News</h1>
                </Link>
                <div className='flex-items-center justify-end space-x-2'>
                    {/*sağa doğru iktiricek justify end */}

                    <button className='hidden md:inline bg-slate-900 text-white
                    px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>
                        {/*hidden md line yok ediyorekran boyutuna göre padingi değiştiriyor çk küçükse kayboluyor*/}
                        Subscribe Now
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header