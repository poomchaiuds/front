import { useNavigate } from "react-router-dom";
import Layout from "../components/layout";
import { Button, Container, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import axios, { AxiosError } from "axios";
import { notifications } from "@mantine/notifications";
import { Order } from "../lib/models";

export default function OrderCreatePage() {
  const navigate = useNavigate();

  const [isProcessing, setIsProcessing] = useState(false);

  const orderCreateForm = useForm({
    initialValues: {
      menu: "",
      total:0,
      note: ""
    }
  });

  const handleSubmit = async (values: typeof orderCreateForm.values) => {
    try {
      setIsProcessing(true);
      notifications.show({
        title: "เพิ่มสั่งอาหารสำเร็จ",
        message: "รอกินเลยจู้",
        color: "teal",
      });
      navigate(`/orders`);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 422) {
          notifications.show({
            title: "ข้อมูลไม่ถูกต้อง",
            message: "กรุณาตรวจสอบข้อมูลที่กรอกใหม่อีกครั้ง",
            color: "red",
          });
        } else if (error.response?.status || 500 >= 500) {
          notifications.show({
            title: "เกิดข้อผิดพลาดบางอย่าง",
            message: "กรุณาลองใหม่อีกครั้ง",
            color: "red",
          });
        }
      } else {
        notifications.show({
          title: "เกิดข้อผิดพลาดบางอย่าง",
          message: "กรุณาลองใหม่อีกครั้ง หรือดูที่ Console สำหรับข้อมูลเพิ่มเติม",
          color: "red",
        });
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Layout>
        <Container className="mt-8">
          <h1 className="text-xl">สั่งอาหารเลย</h1>

          <form onSubmit={orderCreateForm.onSubmit(handleSubmit)} className="space-y-8">
            <TextInput
              label="ชื่อเมนู"
              placeholder="ชื่อเมนู"
              {...orderCreateForm.getInputProps("menu")}
            />

            <NumberInput
              label="จำนวน(แก้ว)"
              placeholder="จำนวน(แก้ว)"
              {...orderCreateForm.getInputProps("total")}
            />

            <TextInput
              label="หมายเหตุ"
              placeholder="หมายเหตุ"
              {...orderCreateForm.getInputProps("note")}
            />

            <Button type="submit" loading={isProcessing}>
              บันทึกข้อมูล
            </Button>
          </form>
        </Container>
      </Layout>
    </>
  );
}
