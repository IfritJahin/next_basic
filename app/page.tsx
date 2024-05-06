'use client';
import Image from "next/image";
import Link from "next/link";
import Example from "./components/Example";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      

      <h1>Hello world</h1>
      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded "><Link href={'/user'}>User</Link></button>
      <Example/>
      <button >First</button>
      <Link href='/user/Home/Navbar'>Go to Navbar</Link>
      <Link href={"/page/Firstpage"}>this page 3!</Link>
      <Link href={"/user/new"}>this page!</Link>
    </main>
    
  );
}
