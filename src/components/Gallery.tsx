import Image from 'next/image'

const Gallery = () => (
  <>
    <div className="grid grid-cols-2 md:hidden">
      <Image width={376} height={376} src="./images/mobile/image-gallery-milkbottles.jpg" alt="Image Gallery Milkbottles" />
      <Image width={376} height={376} src="./images/mobile/image-gallery-orange.jpg" alt="Image Gallery Orange" />
      <Image width={376} height={376} src="./images/mobile/image-gallery-cone.jpg" alt="Image Gallery Cone" />
      <Image width={376} height={376} src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="Image Gallery Sugar Cubes" />
    </div>

    <div className="hidden md:grid md:grid-cols-4">
      <Image width={720} height={894} src="./images/desktop/image-gallery-milkbottles.jpg" alt="Image Gallery Milkbottles" />
      <Image width={720} height={894} src="./images/desktop/image-gallery-orange.jpg" alt="Image Gallery Orange" />
      <Image width={720} height={894} src="./images/desktop/image-gallery-cone.jpg" alt="Image Gallery Cone" />
      <Image width={720} height={894} src="./images/desktop/image-gallery-sugarcubes.jpg" alt="Image Gallery Sugar Cubes" />
    </div>
  </>
)

export default Gallery
