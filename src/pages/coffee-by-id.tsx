import { Alert,Container, Divider } from "@mantine/core";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { Coffee } from "../lib/models";
import useSWR from "swr";
import Loading from "../components/loading";
import { IconAlertTriangleFilled, } from "@tabler/icons-react";

export default function CoffeeByIdPage() {
  const { coffeeId } = useParams();

  const { data: coffee, isLoading, error } = useSWR<Coffee>(`/coffees/${coffeeId}`);

  return (
    <>
      <Layout>
        <Container className="mt-4">
          {isLoading && !error && <Loading />}
          {error && (
            <Alert
              color="red"
              title="เกิดข้อผิดพลาดในการอ่านข้อมูล"
              icon={<IconAlertTriangleFilled />}
            >
              {error.message}
            </Alert>
          )}

          {!!coffee && (
            <>
              <h1>{coffee.c_title}</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <img
                  src="https://placehold.co/150x200"
                  className="w-full object-cover aspect-[3/4]"
                />
                <div className="col-span-2 px-4 space-y-2 py-4">
                  <h3>รายละเอียดเมนู</h3>
                  <p className="indent-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, neque.
                    Necessitatibus nihil quibusdam molestiae, asperiores nesciunt quod aliquid
                    accusamus iusto sint amet optio laudantium eius, facilis iure ipsa assumenda
                    alias pariatur! Quis ad ratione amet fugiat, et culpa cupiditate, veritatis
                    beatae sed voluptatum a reprehenderit id odit quas? Enim, earum?
                  </p>
                </div>
              </div>

              <Divider className="mt-4" />
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}
