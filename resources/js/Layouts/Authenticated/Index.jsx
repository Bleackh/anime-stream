import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Authenticated({ children }) {
    return (
        <>
            <div className="mx-auto max-w-screen hidden lg:block">
                {/* START: Sidebar */}
                <Sidebar />
                {/* END: Sidebar */}

                {/* START: Content */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* START: Topbar */}
                        <Topbar />
                        {/* END: Topbar */}
                        <main>{children}</main>
                    </div>
                </div>
                {/* END: Content */}
            </div>
        </>
    );
}
