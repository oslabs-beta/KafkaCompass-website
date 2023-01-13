import React,  { useRef }  from "react";
import AboutUs from "./AboutUs";
import LogoWithoutText from "./static/logo_without_text.png";
import Navbar from "./nav-bar";

const App = (props) => {
    const myRef = useRef(null);
    const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <Navbar />
            <div className="first-page">
            <div className="landing-container">
            <article className="font-mono">
                <img className="icon-logo my-2" src={LogoWithoutText} />
                <h2 className="page-title text-lg ">Kafka Compass</h2>
                <p className="text-justify text-lg">
                Welcome to KafkaCompass: an open source tool to make your Kafka
                experience easier. KafkaCompass will be your navigator while
                working with Confluent Cloud. Get performance and content
                statistics to monitor your Kafka cluster, view messages in your
                topics, and check your cluster's history snapshots to see how you
                cluster's performance changed over time. All you need to get
                started is a running Kafka cluster in your Confluent Cloud. Sign
                up and start monitoring!
                </p>
            </article>
                    <div className="landing-buttons my-3">
                        <form action="https://github.com/oslabs-beta/KafkaCompass">
                        <button className="btn btn-outline"> Navigate to Github Repository </button>
                        </form>
                        <button onClick={executeScroll} className="btn btn-outline" >Meet the team</button>
                     </div>
            </div>
        </div>
        <div ref={myRef}>
            <AboutUs />
        </div>
        </main>
    )
}

export default App;