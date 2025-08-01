import { Route, Routes } from "react-router-dom";
import "./App.css";
import { SignIn } from "./pages/sign-in";
import { SignUp } from "./pages/sign-up";
import { Home } from "./pages/home";
import { Feed } from "./components/feed/feed";
import { MessageList } from "./components/messages/message-list";
import { NotFound } from "./components/home/not-found";
import { NavProvider } from "./store/nav-context";
import { ProtectedRoute } from "./routes/protected-route";
import { UserProvider } from "./store/user-context";
import { Message } from "./components/messages/message";
import { Discover } from "./components/discover/discover";
import { Profile } from "./components/profile/profile";

function App() {
   return (
      // Route configuration
      <UserProvider>
         <NavProvider>
            <Routes>
               <Route path="/sign-up" element={<SignUp />} />
               <Route path="/sign-in" element={<SignIn />} />
               <Route path="/" element={<ProtectedRoute />}>
                  <Route path="/" element={<Home />}>
                     <Route path="/feed" element={<Feed />} />
                     <Route path="/messages" element={<MessageList />} />
                     <Route path="/messages/:id" element={<Message />} />
                     <Route path="/discover" element={<Discover />} />
                     <Route path="/profile/:userId" element={<Profile />} />
                  </Route>
               </Route>
               <Route path="*" element={<NotFound />} />
            </Routes>
         </NavProvider>
      </UserProvider>
   );
}

export default App;
