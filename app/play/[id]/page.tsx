"use client";

import VideoPlayer from "../../moviePlayer";
import { useParams } from "next/navigation";
import PageHeader from '../../pageHeader';

export default function Page(){
    const params = useParams();
    const id = params?.id;

    return (
        <>
            <PageHeader />
            <main className="container mx-auto p-6">
                <VideoPlayer  id={Number(id)}/>
            </main>
        </>
       
    )
}