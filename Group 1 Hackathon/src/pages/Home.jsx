import Navbar from "../components/Navbar.jsx";
import Block01 from "../components/Block01";
import Block02 from "../components/Block02";
import Block03 from "../components/Block03";
import SocialIcons from "../components/SocialIcons";


function Home() {
    return (
        <>
            <div className="App">

                <Block01 />
                <Block02 />
                <Block03 />
                <SocialIcons />
            </div>
        </>
    );
}

export default Home;