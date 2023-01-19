'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";


function SearchBox() {//1.5
    const [input, setInput] = useState("");

    const router=useRouter();

    const handleSearch = (e: FormEvent<HTMLFormElement>) => { //3
        e.preventDefault(); //refresh yapmasını engelliycek
        if(!input) return;

        router.push(`/search?term=${input}`);

    }

    return (
        <form//1
            onSubmit={ handleSearch}
            className="max-w-6xl mx-auto flex justify-between items-center px5">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                // sanki yazıyorsun refreshliyor
                placeholder="Search Keywords..."
                className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-400 outline-none flex-1 bg-transparent
                dark:text-orange-400"
            />

            <button type="submit"//2
                disabled={!input} //input yoksa butonu kapat
                className="text-orange-400 disabled:text-gray-400"
            >Search
            </button>
        </form>
    );
}

export default SearchBox