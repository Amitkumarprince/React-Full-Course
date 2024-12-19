import { About } from "./About"
import { BioProvider } from "./ContexAPI"
import { Home } from "./Home"

export const Use67 = () => {
    return (
        <>
            <BioProvider>
                <Home />
                <About />
            </BioProvider>
        </>
    )
}