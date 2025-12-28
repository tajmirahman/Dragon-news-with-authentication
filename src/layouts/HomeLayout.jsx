import React from "react";
import { Outlet, useLoaderData } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import LeftAside from "../components/homelayout/LeftAside";
import RighAside from "../components/homelayout/RighAside";

const HomeLayout = () => {

  const data= useLoaderData();
  console.log(data);

  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3 grid grid-cols-12 gap-5">

        <aside className="col-span-3 md:col-span-3 md:sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>

        <section className="col-span-9 md:col-span-6">
          <Outlet></Outlet>
        </section>

        <aside className="md:col-span-3 md:sticky top-0 h-fit hidden md:block">
          <RighAside></RighAside>
        </aside>

      </main>
    </div>
  );
};

export default HomeLayout;
