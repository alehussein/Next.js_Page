import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

// const DUMMY_MEETUP = [
//   {
//     id: "m1",
//     title: "The first Meetup",
//     image:
//       "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
//     address: "Some street 5 , number 78 City",
//     description: "The first Meetup description",
//   },
//   {
//     id: "m2",
//     title: "The second Meetup",
//     image:
//       "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
//     address: "Some street 5 , number 78 City",
//     description: "The second Meetup description",
//   },
//   {
//     id: "m3",
//     title: "The third Meetup",
//     image:
//       "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
//     address: "Some street 5 , number 78 City",
//     description: "The third Meetup description",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list og highly active react meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </Fragment>
  );
};

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   //fetch data from api

//   return{
//     props:{
//       meetups: DUMMY_MEETUP
//     }
//   };
// }

export async function getStaticProps() {
  //predetermined
  //fetch data from api

  const client = await MongoClient.connect(
    "mongodb+srv://alejandrohussein1:Zaq12345@cluster0.8rzmsvo.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })), //always a object must return
    },
    revalidate: 10, // number of seconds next wait until page regenerate
  };
}

export default HomePage;
