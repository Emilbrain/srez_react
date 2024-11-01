import { Catalogg } from "../components/catalog";
import { Headerzz } from "../components/header";
import { Slider } from "../components/slider";

export function HomePage() {
    return (
        <section className="main">
            <Headerzz />
            <Slider />
            <Catalogg />
        </section>
    )
}