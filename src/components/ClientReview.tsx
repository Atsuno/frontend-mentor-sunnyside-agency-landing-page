import Image from 'next/image'

const ClientReview = () => (
  <section className="p-8">
    <div className="py-6 text-center font-secondary text-sm uppercase tracking-widest text-dark-three md:text-xl"> Client testimonials</div>
    <div className="flex flex-col gap-5 text-center md:flex-row">
      <div className="flex flex-col items-center p-5">
        <div><Image className="rounded-full" width={72} height={72} alt="clientIcon" src="./images/image-emily.jpg" /></div>
        <p className="py-5 text-dark-two">
          We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
        </p>
        <div className="font-secondary font-extrabold text-dark-one">
          Emily R.
        </div>
        <div className="text-dark-three">
          Marketing Director
        </div>
      </div>
      <div className="flex flex-col items-center p-5">
        <div><Image className="rounded-full" width={72} height={72} alt="clientIcon" src="./images/image-thomas.jpg" /></div>
        <p className="py-5 text-dark-two">
          Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
        </p>
        <div className="font-secondary font-extrabold text-dark-one">
          Thomas S.
        </div>
        <div className="text-dark-three">
          Chief Operating Officer
        </div>
      </div>
      <div className="flex flex-col items-center p-5">
        <div><Image className="rounded-full" width={72} height={72} alt="clientIcon" src="./images/image-jennie.jpg" /></div>
        <p className="py-5 text-dark-two">
          Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
        </p>
        <div className="font-secondary font-extrabold text-dark-one">
          Jennie F.
        </div>
        <div className="text-dark-three">
          Business Owner
        </div>
      </div>
    </div>
  </section>
)

export default ClientReview
