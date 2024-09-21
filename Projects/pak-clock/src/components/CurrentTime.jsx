let CurrentTime = () => {
  let time = new Date();
  return (
    <div class="text-center text-black">
      <p class="font-semibold">
        The Current PK time is :
        <p class="font-bold text-4xl">
          {time.toLocaleDateString()} -{time.toLocaleTimeString()}
        </p>
      </p>
    </div>
  );
};
export default CurrentTime;
