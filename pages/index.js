import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "The first Meetup",
    image:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
    address: "Some street 5 , number 78 City",
    description: "The first Meetup description",
  },
  {
    id: "m2",
    title: "The second Meetup",
    image:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
    address: "Some street 5 , number 78 City",
    description: "The second Meetup description",
  },
  {
    id: "m3",
    title: "The third Meetup",
    image:
      "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
    address: "Some street 5 , number 78 City",
    description: "The third Meetup description",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
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

export async function getStaticProps() {   //predetermined
 //fetch data from api
  return {
    props: {
      meetups: DUMMY_MEETUP, //always a object must return
    },
    revalidate: 10, // number of seconds next wait until page regenerate
  };
}

export default HomePage;
