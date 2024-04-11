import { Navbar } from "./pages/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Navbar></Navbar>
            <hr />
            {children}
        </>
    )
}