import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

function Header() {
    return (
        <header>
            <div className="grid grid-col-3 p-10 itmes-center">
            <Bars3Icon className="h-8 w-8 cursor-pointer" />
            <Link href='/' >
            <h1>The NEWBEETOMATO News</h1>
            </Link>
            </div>
        </header>
    );
}

export default Header