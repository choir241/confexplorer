import { label } from "../../static/label"
import { useContext } from "react"
import { AuthSession } from "../../middleware/Context";

export default function User(){

    const {session, loading} = useContext(AuthSession);

    return(
        <>
        {loading ? <h1>{label.loading}</h1> : 
        (
        <>
        <h1>{session?.user.email}</h1>

        <h2>{label.user.h2}</h2>
        </>
        )
        }

        </>
    )
}