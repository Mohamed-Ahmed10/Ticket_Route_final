import Hero from "../Hero";
import Partners from "../Partners";
import TripIdeas from "../TripIdeas";
import { Container } from "react-bootstrap"

export default function Airplane() {
    return (
        <Container>
            <Hero trip_status="flight" />
            <Partners trip_status="flight"/>
            <TripIdeas trip_status="flight"/>
        </Container>
    )
}
