import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle, name }) => {


  return (
    <>
      <h1>{ title }</h1>
      <div>{ subtitle }</div>
      <div>{ name }</div>
    </>
  )
}

FirstApp.propTypes = {

  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,

}

FirstApp.defaultProps = {
  title: 'No hay Titulo',
  subtitle: 'No hay subtitulo',
  name: 'No hay un nombre',
}
