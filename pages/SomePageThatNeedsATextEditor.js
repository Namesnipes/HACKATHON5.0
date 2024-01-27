import React, { useMemo } from 'react';
import dynamic from "next/dynamic";

export default function SomePageThatNeedsATextEditor() {
    // this allows you to show a little loading thing while you wait for the import
    // also, this editor is only works on the client, so ssr is false to not server side render it
    // (i think that's what it does, i'm not 100% sure <- co-pilot suggested this)
    const MyAwesomeTextEditor = useMemo(() => {
        return dynamic(() => import("../components/MyAwesomeTextEditor"), {
            loading: () => <p>loading...</p>,
            ssr: false,
        });
    }, []);
    return (
        <main>
            <MyAwesomeTextEditor />
        </main>
    );
}