import Head from "next/head";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import Order from "../components/Order";

export default function Home() {
  const destinations = [
    {
      title: "Teluk Toran",
      desc: "31 people going",
      img: "/assets/desa-1.jpg",
    },
    {
      title: "Pulau Karst",
      desc: "27 people going",
      img: "/assets/desa-2.jpg",
    },
    {
      title: "Pantai Patawana",
      desc: "20 people going",
      img: "/assets/desa-3.jpg",
    },
  ];
  return (
    <div>
      <Head>
        <title>Fakfak Travel</title>
        <meta name="description" content="Travel UMKM Fakfak Goes Online" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>

      <main>
        <section className="hero">
          <div className="title">
            <h3>BAY &nbsp;|&nbsp; ISLAND &nbsp;|&nbsp; BEACHES</h3>
            <h1>Spend your vacation with our activites</h1>
            <h2>Grand Opening Spots</h2>
          </div>
          <div className="container hero__container">
            {destinations.map((destination, idx) => (
              <article key={idx} className="destination">
                <div className="destination__img">
                  <Image
                    src={destination.img}
                    width={158}
                    height={154}
                    alt={destination.title}
                    layout="responsive"
                  />
                </div>
                <div className="destination__info">
                  <p>{destination.title}</p>
                  <small>
                    <FiUsers />
                    {destination.desc}
                  </small>
                </div>
              </article>
            ))}
          </div>
        </section>
        <Order />
      </main>
    </div>
  );
}
