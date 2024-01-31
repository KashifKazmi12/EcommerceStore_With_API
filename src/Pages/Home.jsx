import React from "react";
import { Hero } from "../Component/Hero";
import { Categories } from "../Component/Categories";
import Banner from "../Component/Banner";
import { Footer } from "../Component/Footer";
import { Products } from "../Component/Products";

export default function Home() {
    return (
        <>
        <Hero/>
        <Categories/>
        <Banner/>
        <Products limit={6}/>
        <Footer/>
        </>
    );
}