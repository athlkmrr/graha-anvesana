import Header from "./Header";
import {Outlet} from 'react-router-dom';

export default function(){
    return(
        <main>
            <Header/>
            <Outlet/>
        </main>
    );
}