import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/bg-cafe-1.jpg";
import Fish from "../assets/images/fish.jpg";
import coffeeImage from "../assets/images/coffee-1.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-orange-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ คางดำ Cafe</h1>
        <h2>รักน้ำ รักปลา รักคางดำ</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            ปลาหมอคางดำมีสีซีด เฉดสีต่างกันไป เช่น สีฟ้าอ่อน ส้ม และเหลืองทอง 
            ปกติจะมีจุดสีเข้มใต้คางเมื่อโตเต็มวัย นอกจากนี้มักมีสีเข้มที่ขอบหลังเหงือกและปลายครีบอ่อนของครีบหลัง 
            ลำตัวมักมีลายเส้น จุด หรือด่าง ที่ไม่สม่ำเสมอ มีปากเล็กซึ่งมีฟันขนาดเล็กหลายร้อยซี่ เรียงกัน 3-6 แถว 
            ปลาตัวผู้และตัวเมียมีความแตกต่างกันเล็กน้อย ปกติหัวของปลาตัวผู้จะใหญ่กว่าหัวของปลาตัวเมียเล็กน้อย 
            บ้างอาจมีสีทองที่แผ่นปิดเหงือก ครีบหลังมีก้าน 15-17 ก้าน และก้านครีบอ่อน 10-12 ก้าน ครีบก้นมีก้าน 3 ก้าน 
            และก้านครีบอ่อน 8-10 ก้าน ความยาวคอดหาง ประมาณ 0.6 ถึง 0.9 เท่าของความลึก 
            สามารถเจริญเติบโตได้ยาวสุดถึง 28 เซนติเมตร แต่ปกติจะยาวถึงประมาณ 17.5 เซนติเมตร
          </p>

          <div>
            <img src={Fish} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>
        <p className="text-right mt-8">
          ปัจจุบันค่าเฟ่ และห้องสมุดของเรา อยู่ในช่วงการดูแลของ ...นายภูมิไชย อุดมศิลป์ 65070178... ผู้นำเข้าปลาหมอคางดำรายใหญ่ของประเทศ
          คาเฟ่ของเรามีบริการให้ยืมหนังสือและกาแฟพร้อมดื่มด่ำกับฝูงปลาหมอคางดำในบึงหลังร้าน
        </p>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}
