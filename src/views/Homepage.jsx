import Partners from "../components/Partners";
import Hero from '../components/Hero.jsx'
import {Container} from "react-bootstrap"
export default function Homepage() {
    return (
        <Container>
            <Hero />
            <Partners />
        </Container>
    )
}
