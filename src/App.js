import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import Landing from './pages/Landing';
// import Home from './pages/Home';
// import Test from './pages/Test';
import AnimatedRoutes from './components/AnimatedRoutes';
import ScrollTop from './components/ScrollTop';
// import ScrollToTop from './components/ScrollToTop';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
// const transition = {
//   initial: {
//     opacity: 0,
//     clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', 
//     transition: { duration: .4 }
//   },
//   animate: {
    
//     clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
//     transition: { duration: .4, staggerChildren: .1 }
//   },
//   exit: {
//     clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
//     transition: { duration: .4 }
//   }
// }

function App() {
  // const [show, setShow] = useState(false)
  // const changeShow = () => {
  //   if (window.scrollY >= 3460) {
  //     setShow(true)
  //   } else {
  //     setShow(false)
  //   }
  // }
  // window.addEventListener('scroll', changeShow);
  return (
    <ApolloProvider client={client}>
      {/* <AnimateSharedLayout type="crossfade"> */}
      {/* <AnimatePresence> */}
        {/* <motion.div
         variants={transition}
         
         initial="initial"
         animate="animate"
         exit="exit"
         className="base-page-size">  */}
<Router >
  <ScrollTop/>
  {/* <div className='z-50'>
         <ScrollToTop />
         </div> */}
      
      {/* <div className={show ? "invisible navi" : "navi z-30"}>
        <Navbar text="Lemon Grove" />
        </div> */}
        <AnimatedRoutes />
        {/* <div className="w-max h-max z-10"> */}
          {/* <Routes >
            <Route
              path="/"
              element={<Home/>}
              />
              {/* <Route 
                path="/Home"
                element={<Home/>}
                /> 
                <Route 
                path="/Test"
                element={<Test/>}
                />
          </Routes> */}
        {/* </div> */}
      </Router>
      {/* </motion.div> */}
      {/* </AnimatePresence> */}
      
      {/* <Footer/> */}
      {/* </AnimateSharedLayout> */}
    </ApolloProvider>
  );
}

export default App;
