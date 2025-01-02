"use client";

import VideoPlayer from "../../moviePlayer";
import { useParams } from "next/navigation";
import PageHeader from '../../pageHeader';

export default function Page(){
    const params = useParams();
    const id = params?.id;
    const date = new Date().getFullYear();
    return (
        <>
            <PageHeader />
            <main className="container mx-auto p-6  h-screen">
                <VideoPlayer  id={Number(id)}/>
                <div className="text-center pt-5">
                    <div className="pb-5">
                        <p>Overview WIP!</p>
                    </div>
                    
                    <a href="/" className=" bg-transparent hover:bg-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                        Back to home
                    </a>  
                </div>
            </main>
            <footer className=" text-sm/6 bg-gray-800 text-white text-center p-4">
                Copyright &copy; {date} <a href="https://github.com/karimaneater">karimaneater</a>
            </footer>
        </>
       
    )
}