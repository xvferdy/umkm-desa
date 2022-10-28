import Head from "next/head";
import Image from "next/image";
import { FiUsers } from "react-icons/fi";
import Order from "../components/Order";

export default function Home({}) {
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
          {/* <div className="container hero__container">
            {places.map((place) => (
              <article key={place._id} className="destination">
                <div className="destination__img">
                  <Image
                    src={place.image}
                    width={158}
                    height={154}
                    alt={place.title}
                    layout="responsive"
                  />
                </div>
                <div className="destination__info">
                  <p>{place.title}</p>
                  <small>
                    <FiUsers />
                    {place.people} people going
                  </small>
                </div>
              </article>
            ))}
          </div> */}
        </section>
        <Order />
      </main>
    </div>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch("https://umkm-desa.vercel.app/api/places");
//   const data = await res.json();

//   return {
//     props: {
//       places: data,
//     },
//   };
// };
