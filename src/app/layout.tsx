import Nav from "../components/Nav";
import Context from "@src/context/Context";
import {useContext} from "react";

export const metadata = {
    title: 'TheSociety',
    description: 'Make a statement with your wardrobe.',
}
export default function RootLayout({children}: any) {

    return (
        <html lang="en" className="bg-bg-primary">
        <body>
        <div className="max-w-[82%] mx-auto ">
            <Nav/>
            <Context>
            <main>{children}</main>
            </Context>
        </div>
        </body>
        </html>
    )
}
