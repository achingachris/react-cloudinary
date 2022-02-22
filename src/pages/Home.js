import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import Header from '../components/Header'
import Meta from '../components/Meta'

const Home = () => {
  // 2. Set your cloud name
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'chris101',
    },
  })

  // cld.image returns a CloudinaryImage with the configuration set.
  const image_1 = cld.image('cld-sample')
  const image_2 = cld.image('sample')
  const image_3 = cld.image('broke')

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // page content
  const pageTitle = 'Cloudiary Video Preview'
  const pageDescription = 'Welcome Here'

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />

      <div className='container'>
        <h1 className='text-center'>Images</h1>
        <div className='row'>
          <div className='col-4'>
            <AdvancedImage cldImg={image_1} className='container' />
          </div>
          <div className='col-4'>
            <AdvancedImage cldImg={image_2} className='container' />
          </div>
          <div className='col-4'>
            <AdvancedImage cldImg={image_3} className='container' />
          </div>
        </div>
      </div>

      <div className='container'>
        <h1>Videos</h1>
      </div>
    </div>
  )
}

export default Home
