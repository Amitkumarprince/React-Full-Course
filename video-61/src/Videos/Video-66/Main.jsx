import { About } from "./About"
import { BioProvider } from "./ContexAPI"
import { Home } from "./Home"

export const CustomHooks66 = () => {
    return (
        <>
            <BioProvider>
                <Home />
                <About />
            </BioProvider>
        </>
    )
}