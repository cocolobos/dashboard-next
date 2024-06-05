import logo from './../img/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";

const Navbar = () => {
    return ( 
        <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex flex-row justify-between">
            <Link href={'/'}>
                <Image alt='logo' src={logo} height={50} width={50}/>
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger className='focus:outline-none'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className='text-black'>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href={'/profile'} />
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={'/auth'} />
                        Logout
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            
        </div> 
    );
}
 
export default Navbar;