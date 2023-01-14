import React,  { useRef }  from "react";
import AboutUs from "./AboutUs";
import LogoWithoutText from "./static/logo_without_text.png";
import Navbar from "./nav-bar";
import KafkaCompassPerformanceStatsDemo from "./static/KafkaCompassPerformanceStatsDemo.gif";
import contentMonitoringScreenshot from "./static/contentMonitoringScreenshot.png"

const App = (props) => {
    const myRef = useRef(null);
    const infoRef = useRef(null);
    const executeScroll = () => {
    myRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const executeScrollToInfo = () => {
        infoRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main>
            <Navbar />
            <div className="landing-container h-screen">
            <div className="flex-1 justify-around ">
            <article className="font-mono">
                <img className="icon-logo my-2" src={LogoWithoutText} />
                <h2 className="page-title text-lg">Kafka Compass</h2>
                <p className="text-justify text-lg">
                Welcome to KafkaCompass: an open source tool to make your Kafka
                experience easier. KafkaCompass will be your navigator while
                working with Confluent Cloud. Get performance and content
                statistics to monitor your Kafka cluster, view messages in your
                topics, and check your cluster's history snapshots to see how you
                cluster's performance changed over time. All you need to get
                started is a running Kafka cluster in your Confluent Cloud. Clone and run our respository, sign up, and start monitoring!
                </p>
            </article>
                <div className="flex justify-around">
                <div className="landing-buttons my-3 flex">
                        <form action="https://github.com/oslabs-beta/KafkaCompass">
                        <button className="btn btn-outline"> Github Repository </button>
                        </form>
                        <button onClick={executeScrollToInfo} className="btn btn-outline" >Learn More</button>
                     </div>
                </div>
            <article><h2 className="page-title"><i>Don't get lost navigating your Kafka clusters - grab a compass!</i></h2></article>
            <div className="flex justify-around"><button onClick={executeScroll} className="btn btn-outline" >Meet the team</button></div>
            </div>
            </div>
            <div>
            <article ref={infoRef} className="flex-1 flex-row justify-around py-10 px-10">
                <div><img className="rounded-lg" src={KafkaCompassPerformanceStatsDemo}></img></div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">View an advanced suite of cluster metrics in Performance Statistics</h2>
                        <p><i>Metrics are securely encrypted and stored for later reference in your personalized Cluster History page</i></p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </ article>
            <article className="flex-1 flex-row justify-around pb-10 px-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Monitor and modify the content of your cluster in Content Monitoring</h2>
                        <p><i>Take control of your cluster, with the ability to add and delete topics, write messages, and consume messages, simply at the click of a button</i></p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div><img className="rounded-lg" src={contentMonitoringScreenshot} height='1000px' width='600p' ></img></div>
            </ article>
            </div>
            <div ref={myRef}>
                <AboutUs />
            </div>
        </main>
    )
}

export default App;