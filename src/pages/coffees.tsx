import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-2.jpg";
import useSWR from "swr";
import { Coffee } from "../lib/models";
import Loading from "../components/loading";
import { Alert, Button } from "@mantine/core";
import { IconAlertTriangleFilled, IconPlus } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function CoffeesPage() {
  const { data: coffees, error } = useSWR<Coffee[]>("/coffees");

  return (
    <>
      <Layout>
        <section
          className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
          style={{
            backgroundImage: `url(${cafeBackgroundImage})`,
          }}
        >
          <h1 className="text-5xl mb-2">กาแฟ</h1>
          <h2>รายการกาแฟทั้งหมด</h2>
        </section>

        <section className="container mx-auto py-8">
          <div className="flex justify-between">
            <h1>รายการกาแฟ</h1>

            <Button
              component={Link}
              leftSection={<IconPlus />}
              to="/coffees/create"
              size="xs"
              variant="primary"
              className="flex items-center space-x-2"
            >
              เพิ่มกาแฟ
            </Button>
          </div>

          {!coffees && !error && <Loading />}
          {error && (
            <Alert
              color="red"
              title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
              icon={<IconAlertTriangleFilled />}
            >
              {error.message}
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {coffees?.map((coffee) => (
              <div className="border border-solid border-neutral-200" key={coffee.c_id}>
                <img
                  src="https://placehold.co/150x200"
                  alt={coffee.c_title}
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="p-4">
                  <h2 className="text-lg line-clamp-2">{coffee.c_title}</h2>
                  <h2 className="text-lg font-semibold line-clamp-1">ราคา {coffee.c_price}</h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
