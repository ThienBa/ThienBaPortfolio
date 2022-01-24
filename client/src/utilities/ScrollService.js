export default class ScrollService {
    static scrollHandler = new ScrollService();

    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById('Contact Me');
        if (!contactMeScreen) return;
        contactMeScreen.scrollIntoView({ behavior: "smooth" });
    }

    scrollToHome = () => {
        let homeScreen = document.getElementById('Home');
        if (!homeScreen) return;
        homeScreen.scrollIntoView({ behavior: "smooth" });
    }
}