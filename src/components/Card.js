import { Card, CardBody } from "reactstrap";

export default function CustomCard({ children }) {

    return (
        <Card className="custom-card-dark">
            <CardBody >
                {children}
            </CardBody>
        </Card>
    )
}