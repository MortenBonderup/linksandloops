import { Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <h1>My Computer Store</h1>
            <Outlet />
        </div>
    );
}