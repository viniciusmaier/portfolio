import TypeIt from "typeit-react";
import { Alegreya } from "next/font/google"
const fontAlegreya = Alegreya({
    subsets: ["latin"],
    weight: "900"
});

export default function AnimationString() {
    return (
        <TypeIt
            className={`${fontAlegreya.className} text-[#00ffffc9] font-extrabold text-[30px]`}
            getBeforeInit={
                (animation) => {
                    animation
                        .type("Programmer", { delay: 500 })
                        .pause(400)
                        .empty()
                        .type("Web Developer", { delay: 200 })
                        .pause(400, { delay: 500 })
                        .move(-9, { delay: 500 })
                        .delete(5, { delay: 500 })
                        .move(12, { delay: 300 })
                        .type(`<span style="color: #F22786;"> Front-End </span>`, { delay: 500 })
                        .delete(10, { delay: 500 })
                        .pause(500)
                        .type(`<span style="color: #ff7c02c9;"><em><strong> Back-End</strong></em><span>`, { delay: 500 })

                    return animation;
                }
            }
        ></TypeIt>
    );
}