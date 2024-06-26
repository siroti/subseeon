import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
    app.AOS = new AOS.init({ disable: "phone", once: true, offset: 10 }); // eslint-disable-line new-cap
};