import Fruits from "./Fruits.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function Apiapp() {
  const [data, setData] = useState("");
  const getApi = () => {
    fetch("https://run.mocky.io/v3/cfb3595d-b827-4a9c-b316-f90134a9e785")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  useEffect(() => {
    getApi();
  }, [setData]);
  return (
    <div>
      <Fruits
        imageUrl="https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/1/11.jpg"
        productName="Fresh Mango"
        discountRate={data.actual_rate}
        productId="123"
        productRating="4"
        maxAllowedQuantity="6"
        productCategory="Fruit"
        actualRate="45.00"
        avaliablity="55"
        itemLabel="v"
        sold="34"
      />
      <Fruits
        imageUrl="https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/1/11.jpg"
        productName="Fresh Meat"
        discountRate="85.00"
        productId="322"
        productRating="8"
        maxAllowedQuantity="4"
        productCategory="Meat"
        actualRate="75.00"
        avaliablity="45"
        itemLabel="m"
        sold="54"
      />
      <Fruits
        imageUrl="https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/8/_/8_1_1_1.jpg"
        productName="Strawberry"
        discountRate="85.00"
        productId="134"
        productRating="4"
        maxAllowedQuantity="16"
        productCategory="Fruit"
        actualRate="65.00"
        avaliablity="75"
        itemLabel="s"
        sold="24"
      />
      <Fruits
        imageUrl="https://blueskytechmage.com/ecolife/media/catalog/product/cache/9f4525831980a06ae430cf99f4023e93/1/1/11.jpg"
        productName="fresh juice"
        discountRate="71.00"
        productId="158"
        productRating="4"
        maxAllowedQuantity="8"
        productCategory="Juice"
        actualRate="145.00"
        avaliablity="25"
        itemLabel="t"
        sold="36"
      />
    </div>
  );
}

export default Apiapp;
