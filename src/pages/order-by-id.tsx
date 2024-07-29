import { Alert,Container, Divider } from "@mantine/core";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";
import { Order } from "../lib/models";
import useSWR from "swr";
import Loading from "../components/loading";
import { IconAlertTriangleFilled, } from "@tabler/icons-react";

export default function OrderByIdPage() {
  const { orderId } = useParams();

  const { data: order, isLoading, error } = useSWR<Order>(`/orders/${orderId}`);

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

          {!!order && (
            <>
              <h1>{order.menu}</h1>
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="col-span-2 px-4 space-y-2 py-4">
                  <h3>จำนวน {order.total}</h3>
                  <h3>หมายเหตุ</h3>
                  <p className="indent-4">
                    {order.note}
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
