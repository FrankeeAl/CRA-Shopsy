import React, { Suspense, lazy } from 'react'
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Home = lazy(() => import('./Home/Home'));
const Items = lazy(() => import('./Items/Items'));
const Overview = lazy(() => import('./Overview/Overview'));
export interface LayoutProps {
    
}
 
const Layout: React.SFC<LayoutProps> = () => {

    return ( 
        <div>
            <Navbar />
            <Suspense fallback={ <h1>Loading</h1> }>
                <Switch>
                    <Route path="/items" component={ Items }/>
                    <Route path="/item/:id" component={ Overview }/>
                    <Route exact path="/" component={ Home }/>
                </Switch>
            </Suspense>
        </div>
    );
}
 
export default Layout;