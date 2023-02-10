import Home from "./pages/Home.vue";
import Software from "./pages/Software.vue"
import Licensing from "./pages/Licensing.vue"
import Hardware from "./pages/Hardware.vue"
import Support from "./pages/Support.vue"
import Contact from "./pages/Contact.vue"
import Training from "./pages/Training.vue"
import TermsAndConditions from "./pages/TermsAndConditions.vue"

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/software",
    name: "software",
    component: Software,
  },
    {
    path: "/hardware",
    name: "hardware",
    component: Hardware,
  },  
  {
    path: "/Support",
    name: "Support",
    component: Support,
  },  
  {
    path: "/training",
    name: "training",
    component: Training,
  }, 
  {
    path: "/licensing",
    name: "licensing",
    component: Licensing,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/terms_and_conditions",
    name: "terms_and_conditions",
    component: TermsAndConditions,
  },
];
