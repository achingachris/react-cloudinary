import { AdvancedImage, AdvancedVideo } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import Header from '../components/Header'
import Meta from '../components/Meta'

// Import required actions and qualifiers.
import { fill } from '@cloudinary/url-gen/actions/resize'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import { Gravity } from '@cloudinary/url-gen/qualifiers'
import { AutoFocus } from '@cloudinary/url-gen/qualifiers/autoFocus'

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

  // Use the video with public ID, 'docs/walking_talking'.
  const myVideo = cld.video('docs/walking_talking')

  // Apply the transformation.
  myVideo
    .resize(
      fill()
        .width(150)
        .height(150)
        .gravity(
          Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
        )
    ) // Crop the video, focusing on the faces.
    .roundCorners(byRadius(20)) // Round the corners.

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
        <div>
          <AdvancedVideo cldVid={myVideo} controls />
        </div>
      </div>
    </div>
  )
}

export default Home
