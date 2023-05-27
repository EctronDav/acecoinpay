import CardHeader from "./components/CardHeader"
import CardForm from "./components/CardForm"
import PaymentInfo from "./components/PaymentInfo"


export default function Home() {
  return (
    <main className="wrapper grid grid-cols-12">
      <CardHeader />
      <CardForm />
      <PaymentInfo />
    </main>
  )
}
