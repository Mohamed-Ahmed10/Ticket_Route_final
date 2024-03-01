import Hero from "../Hero";
import Partners from "../Partners";
import TripIdeas from "../TripIdeas";
import { Container } from "react-bootstrap"

export default function Train() {
    return (
        <Container>
            <Hero trip_status="train" />
            <Partners />
            <TripIdeas />
        </Container>
    )
}
