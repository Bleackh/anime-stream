import React from "react";
import Authenticated from "@/Layouts/Authenticated/Index";
import { Link, Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <>
            <Head title="Dashboard"></Head>
            <Authenticated></Authenticated>
        </>
    );
}
