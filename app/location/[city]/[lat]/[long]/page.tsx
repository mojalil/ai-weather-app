type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

const Weatherpage = ({ params: { city, lat, long } }: Props) => {
  return (
    <div>
      <h1>
        Weather Page for: {city} {lat} {long}{" "}
      </h1>
    </div>
  );
};

export default Weatherpage;
