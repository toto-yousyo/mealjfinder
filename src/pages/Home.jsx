import Loading from "../components/Loading"
import { AppContext, useContext } from "../context"

const Home = () => {
  const contextValues = useContext(AppContext)
  return (
    <>
      <h3>HomePage</h3>
      {contextValues.loading && <Loading />}
    </>
  )
}
export default Home
