import Hero from "../Hero";
import Partners from "../Partners";
import { Container } from "react-bootstrap"

export default function Train() {
    return (
        <Container>
            <Hero trip_status="train" />
            <Partners trip_status="train"/>
        </Container>
    )
}
