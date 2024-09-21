import Items from "./Items";
const CarModels = (props) => {
  return (
    <>
      <ul class="list-disc">
        {props.items.map((item) => (
          <Items key={item} carItem={item}></Items>
        ))}
      </ul>
    </>
  );
};
export default CarModels;
