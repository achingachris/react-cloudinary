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
  const image_3 = cld.image(
    'Brock_Lesnar_Profile--50493bfde9a49b359bb5853996fc8c8c_lzz8yc'
  )

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // page content
  const pageTitle = 'Cloudiary Video Preview'
  const pageDescription = 'Welcome Here'

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />

      <div className='container'>
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
    </div>
  )
}

export default Home
