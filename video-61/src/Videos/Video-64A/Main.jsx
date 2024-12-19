import { About } from "./About"
import { BioProvider } from "./ContexAPI"
import { Home } from "./Home"
import { ParentComponent64 } from "./PropDrilling"

export const Main64A = () => {
    return (
        <BioProvider>
            <Home />
            <About />
            <ParentComponent64 />
        </BioProvider>
    )
}