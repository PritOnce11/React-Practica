import { Global } from "@emotion/react"
import { Titles } from "../../css/StylesPage"

export default function HomePage() {
    return (

        <>
            <Global styles={{ body: { background: 'black', margin: 0, padding: 0 } }}/>

            <Titles>HOME PAGE</Titles>
        </>

    )
}

