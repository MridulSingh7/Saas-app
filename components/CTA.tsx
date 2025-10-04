import Link from "next/link"
import Image from "next/image"
const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start learning your way.</div>
      <h2 className='text-3xl font-bold'>Build and Personalize your Learning Companion</h2>
      <p>pick a name, subject, voice, &personality - and start learning through voice conversations that feel nice and fun</p>
      <Image src='images/cta.svg' alt="cta" width={362} height={232}></Image>
      <button className="btn-primary">
        <Image alt="plus" src="/icons/plus.svg" width={12} height={12}></Image>
        <Link href="/companions/new"><p>Build a new Companion</p></Link>
      </button>
    </section>
  )
}

export default CTA
