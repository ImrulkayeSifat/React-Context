import React,{useContext} from "react";
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';



const Navbar = () => {
    const {isAuthenticated,toggleAuth} = useContext(AuthContext);
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
            <nav style={{background:theme.ui,color:theme.syntax}}>
                <h1>Context App</h1>
                <div onClick={toggleAuth}>
                    {isAuthenticated ? 'Logged in' : 'Logged out'}
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
    )
}

export default Navbar



// class Navbar extends React.Component {
//     render() { 
//         return (
//             <AuthContext.Consumer>{(authContext)=>(
//                 <ThemeContext.Consumer>{(themeContext)=>{
//                     const {isAuthenticated,toggleAuth} = authContext;
//                     const {isLightTheme,light,dark} = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return(
//                         <nav style={{background:theme.ui,color:theme.syntax}}>
//                             <h1>Context App</h1>
//                             <div onClick={toggleAuth}>
//                                 {isAuthenticated ? 'Logged in' : 'Logged out'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}</ThemeContext.Consumer>)}
//             </AuthContext.Consumer>
            
//         );
//     }
// }
 
// export default Navbar;




// class Navbar extends React.Component {
//     static contextType = ThemeContext;
//     render() { 
//         //console.log(this.context);
//         const {isLightTheme,light,dark} = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//         <nav style={{background:theme.ui,color:theme.syntax}}>
//             <h1>Context App</h1>
//             <ul>
//                 <li>Home</li>
//                 <li>About</li>
//                 <li>Contact</li>
//             </ul>
//         </nav>);
//     }
// }

