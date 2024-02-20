import Partners from "../components/Partners";
import Hero from '../components/Hero.jsx';
import { Container } from "react-bootstrap";
import TripIdeas from '../components/TripIdeas';
export default function Homepage() {
    return (
        <Container>
            <Hero />
            <Partners />
            <TripIdeas />
        </Container>
    )
}
