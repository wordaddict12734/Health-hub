import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Appointments from "./components/Appointments";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer"; // Capitalize the import
import Aboutus from "./components/Aboutus";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Reports from "./components/Reports";
import SignUp from "./components/SignUp";
import Testimonial from "./components/Testimonials";
import Layout from "./Layout";
import Contact from "./components/Contact";
import Doctor from "./components/Doctors";
import Patient from "./components/Patient"; // Fixed import name


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <LandingPage />
        <Aboutus />
        <Testimonial />
        <Contact />
        <Footer />
      </Layout>
    ),
  },
  { path: "about", element: <Layout><Aboutus /></Layout> },
  { path: "testimonial", element: <Layout><Testimonial /></Layout>}, // Footer added only here
  { path: "home", element: <Layout><Home /></Layout> },
  { path: "login", element: <Layout><Login /></Layout> },
  { path: "signup", element: <Layout><SignUp /></Layout> },
  { path: "contact", element: <Layout><Contact /></Layout> },
  {path: "footer", element: <Layout><Footer /></Layout> },
  { path: "profile", element: <Layout><Profile /></Layout> },
  { path: "appointment", element: <Layout><Appointments /></Layout> },
  { path: "reports", element: <Layout><Reports /></Layout> },
  { path: "doctor", element: <Layout><Doctor /></Layout> },
  { path: "patient", element: <Layout><Patient /></Layout> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
