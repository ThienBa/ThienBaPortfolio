import Home from '../components/Home/Home';
import AboutMe from '../components/AboutMe/AboutMe';
import Resume from '../components/Resume/Resume';
import ContactMe from '../components/ContactMe/ContactMe';

export const TOTAL_SCREENS = [
    {
        screen_name: "Home",
        component: Home
    },
    {
        screen_name: "About Me",
        component: AboutMe
    },
    {
        screen_name: "Resume",
        component: Resume
    },
    {
        screen_name: "Contact Me",
        component: ContactMe
    }
]