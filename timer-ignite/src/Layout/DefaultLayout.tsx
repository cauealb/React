import { Header } from "../Components/Header"
import { Outlet } from 'react-router'

export function DefaultLayout () {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}