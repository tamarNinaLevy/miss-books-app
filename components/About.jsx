import { util } from "../services/util.service.js";

export function About() {
    return (
        <div className="about">
            <h1>About Our Library...</h1>
            <p>{util.makeLorem(250)}</p>
            <p>{util.makeLorem(200)}</p>
            <p>{util.makeLorem(100)}</p>
        </div>
    )
}