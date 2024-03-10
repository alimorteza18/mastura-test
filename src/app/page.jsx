'use client'

import { useState } from "react";
// import { Activity, Faq, Gift, Hero, Reels, Value, Navbar, Footer, Login, } from "../components/home/Login";
import Login from "../components/home/Login"
import Footer from "../components/home/Footer"
import Navbar from "../components/home/Navbar"
import Value from "../components/home/Value"
import Reels from "../components/home/Reels"
import Hero from "../components/home/Hero"
import Gift from "../components/home/Gift"
import Faq from "../components/home/Faq"
import Activity from "../components/home/Activity"
import Guard from "@/Containers/Guard";



const Home = () => {
  const [showModal, setShowModal] = useState(false);


  return (<main>

    <Login
      modal={showModal}
      setModal={setShowModal}
    />
    {/* <Navbar
      setModal={setShowModal}
    /> */}
    <Hero
      setModal={setShowModal} />
    <Reels />
    <Gift
      setModal={setShowModal}
    />
    <Activity />
    <Faq />
    <Value />
    <Footer />
  </main>);
}

export default Home;


