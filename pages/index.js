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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUP} />;
};

export default HomePage;
