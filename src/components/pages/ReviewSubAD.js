import React from "react";
import { Button, ConfigProvider, Form, Input, Upload, Divider, Select, message } from "antd";
import styles from "./ReviewSubAD.module.css";
import { PlusOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const ReviewSub = () => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info("글이 등록되었습니다!");
  };
  
  //리셋버튼
  const onReset = () => {
    form.resetFields();
  };
  //--리셋버튼
  

  const onFinish = function (val) {
    console.log(val);
  };
  return (
    <div id={styles.uploadContainer}>
      <ConfigProvider theme={{ token: { colorPrimary: "#F25A29" } }}>
        <Form name="upload" style={{ maxWidth: 600 }} onFinish={onFinish} form={form}>
          <Form.Item name="upload">
            <div id={styles.uploadImg}>
              <Upload action="/upload.do"  listType="picture-card"  >
               <PlusOutlined />
              <div style={{ marginTop: 8 }}>이미지업로드</div>
              </Upload>
              <Divider></Divider>
              <img src="/images/icons/camera.png" alt="" />
              <span>사진을올려주세요.</span>
              <span>jpg | png</span>
            </div>
          </Form.Item>
          <Form.Item name="gender" label="성별" rules={[{ required: true }]}>
            <Select placeholder="성별을 선택해주세요"  allowClear>
              <Option value="male">남자</Option>
              <Option value="female">여자</Option>
              <Option value="other">기타</Option>
            </Select>
          </Form.Item>
          <Divider></Divider>
          <Form.Item label={<span className="upload-label">상품명</span>} name="product-name" rules={[{ required: true, message: "후기 글을 써주세요" }]}>
            <Input className={styles.uploadName} placeholder="상품명을 입력해주세요" size="large" />
          </Form.Item>
          <Divider></Divider>

          <Form.Item label={<div className="upload-label">글쓰기</div>} name="product-description" rules={[{ required: true, message: "텍스트를 입력해주세요." }]}>
            <TextArea className={styles.Textarea} size="large" id="product-description" showCount maxLength={300} placeholder="텍스트를 작성해주세요"></TextArea>
          </Form.Item>
          <Form.Item>
            {contextHolder}
            <Button id={styles.submitButton} htmlType="submit" onClick={info}>
              후기등록하기
            </Button>
            <Button id={styles.resetButton} htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </Form.Item>
          <Divider></Divider>
        </Form>
      </ConfigProvider>
    </div>
  );
};
export default ReviewSub;