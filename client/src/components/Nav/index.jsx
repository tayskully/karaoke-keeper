import auth from "../../utils/auth";
import { Link } from "react-router-dom";
import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar, Button } from 'semantic-ui-react'; 

function Nav() {
    function showNavigation() {
        if (auth.loggedIn()) {
          return (
            // <ul className="flex-column">
            //   <li className="mx-1">
            //     {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            //     <a href="/" onClick={() => auth.logout()}>
            //       Logout
            //     </a>
            //   </li>
            // </ul>
            
            
            <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible
                    width='thick'
                >
                  <div>
                        <a href="/">
                        <img
                          src="./kk-logo.svg"
                          width="96px"
                          className="logo"
                          alt="karaoke keeper logo"
                        />
                      </a>
                      </div>
                
                <Link to="/">
                    <Menu.Item as='a'>
                    <Icon name='podcast' />
                        Home
                    </Menu.Item>
                 </Link>
                
                <Link to="/me" onClick={() => {window.location.href='/me'}}>
                    <Menu.Item as='a'>
                    <Icon name='address card' />
                        Profile
                    </Menu.Item>
                 </Link>

                <Link to="/" onClick={() => auth.logout()}>
                    <Menu.Item as='a'>
                    <Icon name='play' />
                        Log out
                    </Menu.Item>
                </Link>
                </Sidebar>
          );
        } else {
          return (
                
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    vertical
                    visible
                    width='thick'
                >
                  <div>
                        <a href="/">
                        <img
                          src="./kk-logo.svg"
                          width="96px"
                          className="logo"
                          alt="karaoke keeper logo"
                        />
                      </a>
                      </div>
                
                <Link to="/">
                    <Menu.Item as='a'>
                    <Icon name='podcast' />
                        Home
                    </Menu.Item>
                 </Link>
                
                

                <Link to="/login">
                    <Menu.Item as='a'>
                    <Icon name='play' />
                        Login
                    </Menu.Item>
                </Link>
                
                <Link to="/signup">
                    <Menu.Item as='a'>
                    <Icon name='random' />
                        Signup
                    </Menu.Item>
                </Link>
                
                </Sidebar>

                
          );
        }
      }
      
    
      return (
        <header className="flex-column px-1">

    
          <nav>
            {showNavigation()}
          </nav>
        </header>
      );
};

export default Nav;

// import auth from "../../utils/auth";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import { Header, Icon, Image, Menu, Sidebar, Button } from 'semantic-ui-react'; 

// function Nav() {
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   function toggleSidebar() {
//     setSidebarVisible(!sidebarVisible);
//   }

//   function showNavigation() {
//     if (auth.loggedIn()) {
//       return (
//         <ul className="flex-column">
//           <li className="mx-1">
//             <a href="/" onClick={() => auth.logout()}>
//               Logout
//             </a>
//           </li>
//         </ul>
//       );
//     } else {
//       return (
//         <div>
          

//           <Sidebar
//             as={Menu}
//             animation='overlay'
//             icon='labeled'
//             inverted
//             vertical
//             width='thick'
//             visible={sidebarVisible}
//           >
            
//             <Link to="/">
//               <Menu.Item as='a'>
//                 <Icon name='podcast' />
//                 Home
//               </Menu.Item>
//             </Link>
//             <Link to="/me">
//               <Menu.Item as='a'>
//                 <Icon name='address card' />
//                 Profile
//               </Menu.Item>
//             </Link>
//             <Link to="/login">
//               <Menu.Item as='a'>
//                 <Icon name='play' />
//                 Login
//               </Menu.Item>
//             </Link>
//             <Link to="/signup">
//               <Menu.Item as='a'>
//                 <Icon name='random' />
//                 Signup
//               </Menu.Item>
//             </Link>
//           </Sidebar>
//           <Button onClick={toggleSidebar}>Toggle Sidebar</Button>
//         </div>
//       );
//     }
//   }

//   return (
//     <header className="flex-column px-1">
//       <nav>{showNavigation()}</nav>
//     </header>
//   );
// }

// export default Nav;

