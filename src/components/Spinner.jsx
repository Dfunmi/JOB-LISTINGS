import ClipLoader from "react-spinners/ClipLoader"

const override = {
  display: 'block',
  margin: '100px auto'
}
const Spinner = ({loading}) => {
  return (
    <ClipLoader
    color = '#4338ca'
    loading = {loading}
    cssOverride={override}
    siza = '150px'
    />
  )
}

export default Spinner
