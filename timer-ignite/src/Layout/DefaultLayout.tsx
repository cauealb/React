import { Header } from "../Components/Header/Header"
import { Outlet } from 'react-router'
import { LayoutDeafult } from "./DefaultLayout.style";

export function DefaultLayout () {
    return (
        <LayoutDeafult>
            <Header />
            <Outlet />
        </LayoutDeafult>
    );
}