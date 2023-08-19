// domain.com/meetup/id/
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg"
      title="The first Meetup"
      address="Some street 5 , number 78 City"
      description="The first Meetup description"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch data
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://img.freepik.com/free-vector/group-people-illustration-set_52683-33806.jpg",
        title: "The first Meetup",
        description: "The first Meetup description",
        address: "Some street 5 , number 78 City",
      },
    },
  };
}

export default MeetupDetails;
