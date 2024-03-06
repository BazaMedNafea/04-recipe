import Error from "../components/error";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();
    return (
        <div className="error-page">
            <Error message="An Error Occured" explanation="whatever" />
        </div>
    )
}