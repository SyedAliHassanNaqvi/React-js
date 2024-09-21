function Grid() {
  return (
    <>
      <div class="grid grid-rows-4 grid-flow-col gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div class="grid grid-rows-subgrid gap-4 row-span-3">
          <div class="row-start-2">06</div>
        </div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
        <div>10</div>
      </div>
    </>
  );
}
export default Grid;
