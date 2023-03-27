//카테고리 프로덕트 볼 수 있는 파일
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, ConfigProvider, Col, Row } from "antd";
import axios from "axios";
import { API_URL } from "../../config/constants";
import ContainerFT from "../UI/ContainerFT";
const { Meta } = Card;
const TotalProductPageAD = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}${window.location.pathname}`)
      .then((result) => {
        const products = result.data.product;
        setItems(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ContainerFT>
        <h2 style={{ paddingTop: 100, paddingBottom: 30 }}>Products</h2>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#F25A29",
            },
          }}
        >
          <Row gutter={12}>
            {items.map((item, idx) => {
              let { name, price, imageUrl, desc } = item;
              return (
                <div key={idx} style={{ paddingBottom: 50 }}>
                  <Col span={6}>
                    <Card hoverable style={{ width: 240 }} cover={<img alt={`${name}사진`} src={`${API_URL}/${imageUrl}`} />}>
                      {console.log(imageUrl, name, price)}
                      <Link to='/products/:id'>
                        <Meta title={name} description={price} />
                        {/* <p>{desc}</p> */}
                      </Link>
                    </Card>
                  </Col>
                </div>
              );
            })}
          </Row>
        </ConfigProvider>
      </ContainerFT>
    </>
  );
};
export default TotalProductPageAD;