import Head from 'next/head'
import Menu from './../components/Menu'
import { Jumbotron, Container } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Home() {

  return (
    <div>
      <Head>
        <title>Celke Home - tutorial</title>
        <meta name="desciption" content="Site do tutorial do Celke" />
        <meta name="author" content="Pedro" />
      </Head>
      <Menu />
      <Jumbotron fluid className="servicos">
        <style>
          {`
            .servicos{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: black;
              color: white;
              margin-bottom: 0rem !important
            }
          
          `}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Serviços da Empresa</h1>
          <p className="lead">Texto da empresa</p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="servicos2">
        <style>
          {`
            .servicos2{
              padding-top: 80px;
              padding-bottom: 80px;
              background-color: green;
              color: white;              
            }
          
          `}
        </style>
        <Container className="text-center">
          <h1 className="display-4">Serviços da Empresa</h1>
          <p className="lead">Texto da empresa</p>

          <div className="row">
            <div className="col-lg-4">
              <div className="bd-placeholder-img rounded-circle" width="140" height="140">
                <FontAwesomeIcon icon={faCoffee} />
              </div>
              
              <h2>Heading</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>

            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              <h2>Heading</h2>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>

            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 140x140"><title>Placeholder</title><rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>

            </div>
          </div>





        </Container>
      </Jumbotron>
    </div>
  )
}
