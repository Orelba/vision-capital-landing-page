import ShowcaseSection from '../../ShowcaseSection/ShowcaseSection'

export default function SectionTwo() {
  return (
    <ShowcaseSection
      title="In the pipeline"
      imagesArray={[
        'companies/harvard.svg',
        'companies/microsoft.svg',
        'companies/nasa.svg',
        'companies/yale.svg',
        'companies/payoneer.svg',
      ]}
    />
  )
}
