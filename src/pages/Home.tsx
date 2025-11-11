import Hero from "../components/Hero";
import MainLayout from "../layouts/MainLayout";
import Feature from "../components/Features";

export default function Home(){
    return (
        <>
            <MainLayout>
                <Hero/>
                <Feature/>
            </MainLayout>
        </>
    )
}