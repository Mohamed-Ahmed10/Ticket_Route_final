import Hero from "../Hero";
import Partners from "../Partners";
import TripIdeas from "../TripIdeas";
import { Container } from "react-bootstrap"

export default function Bus() {
    return (
        <Container>
            <Hero trip_status="bus" />
            <Partners trip_status="bus"/>
            <TripIdeas trip_status="bus"/>
        </Container>
    )
}
